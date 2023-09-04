"use client"
import { removeCategory } from "@/actions/CategoryActions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation"

interface RemoveCategoryButtonProps {
    id: number
    children: React.ReactNode
}

function RemoveCategoryButton({ children, id }: RemoveCategoryButtonProps) {

    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (data: FormData) => {
        console.log("Client")
        if (id <= 2) { return }
        const test = await removeCategory(id)

        if (test) {
            toast({
                title: "Kategorie entfernt",
                description: "Die Kategorie wurde erfolgreich entfernt.",
            })
            router.refresh();
            console.log("Refreshed")
        }
    }


    return (
        <form action={handleSubmit} className="relative group">
            {children}
            <button className="font-bold text-red-600 ml-2">X <span className="text-xs absolute top-0 opacity-0 group-hover:opacity-100">Löschen</span></button>
        </form>
    )
}

export default RemoveCategoryButton