import { cn } from "@/lib/utils"

type Props = {
    element?: "H1" | "H2"
    children: React.ReactNode
    classname?: string
}

const GradientText = ({ children, classname, element }: Props) => {
    switch (element) {
    case "H1":
        return (
            <h1 className={cn(classname,"text-gradient")}>{children}</h1> 
        )
        case "H2":
            return (
                <h2 className={cn(classname, "text-gradient")}>{children}</h2>
            )
  }
}

export default GradientText