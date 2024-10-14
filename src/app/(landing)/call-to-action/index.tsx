import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { BadgePlus } from "@/icons/badge-plus"
import Link from "next/link"


type Props = {}

const CallToAction = (props: Props) => {
  return (
    <div className=" flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
        <GradientText
        classname="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
        element="H1"
        >
            Bringing Communities <br className="md:hidden" /> Together
        </GradientText>
        <p className=" text-sm md:text-center text-left text-muted-foreground">
            Grouple is a vibrant online community platform that empowers
            <br className="md:hidden" />
            people to connect, <br className="hidden md:block" />{" "}
            collaborate, and cultivate maeaning
            <br className="md:hidden" />
            relationships
        </p>
        <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
<Button
   variant="outline"
className="rounded-xl bg-transparent text-base"
>
    watch Demo
</Button>
<Link href="/sign-in">
<Button className="rounded-xl text-base flex gap-2">
    <BadgePlus /> Get Started
</Button>
</Link>
        </div>
    </div>
  )
}
export default CallToAction