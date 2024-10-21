

type Props = {}

const SignUpSchema = (props: Props) => {
    const {
        register,
        errors,
        verifying,
        creating,
        onGenerateCode,
        OnInitiateUserRegistration,
        code,
        setCode,
        getValues,
    } = useAuthSignUp()

  return <div>SignUpSchema</div>
}

export default SignUpSchema