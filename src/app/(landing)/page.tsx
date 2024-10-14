import dynamic from "next/dynamic";
import DashboardSnippet from "./_components/dashboard-snippet";
import CallToAction from "./call-to-action";

const PricingSection = dynamic(
    () => 
        import("./_components/pricing").then(
            (Component) => Component.PricingSection,
        ),
        { ssr: true},
)

export default function Home() {
    return (
        <main className="md:px-10 py-20 flex flex-col gap-36">
            <div>
                <CallToAction />
                <DashboardSnippet />
            </div>
            <PricingSection />
        </main>
    )
}
            