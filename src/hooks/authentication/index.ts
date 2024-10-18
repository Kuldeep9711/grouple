import { useSignIn } from "@clerk/nextjs"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { string, z } from "zod"
import { SignInSchema } from "./schema"

import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const useAuthSignIn = () => {
    const { isLoaded, setActive, signIn } = useSignIn()
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        mode: "onBlur",
    })

    const router = useRouter()
    const onClerkAuth = async (email: string, password: string) => {
      if (!isLoaded)
        return toast ("Error", {
    description: "Oops! something went wrong",
        }) 
        try {
            const authenticated = await signIn.create ({
                identifier: email,
                password: password,
            })

            if (authenticated.status === "complete") {
                reset()
                await setActive ({ session: authenticated.createdSessionId })
                toast("Success", {
                    description: "Welcome back!",
                })
                router.push("/callback/sign-in")
            }
        }catch (error: any) {
            if (error.errors[0].code === "form_password_incorrect")
                toast("Error", {
            description:"email/password is incorrect try again",
            })
        }
    }

    const { mutate: InitiateLoginFlow, isPending } = useMutation ({
        mutationFn: ({
            email,
            password,
        }: {
           email: string
           password: string
        }) => onClerkAuth(email,password),
    })

    const onAuthenticateUser = handleSubmit (async (value) => {
        InitiateLoginFlow ({ email: value.email, password: value.password })
    })

    return {
        onAuthenticateUser,
        isPending,
        register,
        errors,
    }
}