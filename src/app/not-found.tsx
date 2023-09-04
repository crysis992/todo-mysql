import { buttonVariants } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import { cn } from "@/lib/utils"
import Link from "next/link"

function ErrorPage() {
    return (
        <section className="grow flex flex-col justify-center">

            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-center font-bold text-amber-900 my-auto p-4 w-fit mx-auto">404 - Not found</h1>
                <Label>The page you are looking for could not be found!</Label>
                <Link className={cn(buttonVariants({ variant: "default" }), "w-fit mt-2")} href={'/'}>Go back</Link>
            </div>

        </section>
    )
}

export default ErrorPage