"use client"

import { Label } from "@radix-ui/react-label"
import { Separator } from "@radix-ui/react-separator"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"
import { CategoryResult, addCategory } from "@/actions/CategoryActions"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface AddCategoryFormProps {
    categories: string[]
}

function AddCategoryForm({ }: AddCategoryFormProps) {
    const { toast } = useToast()
    const router = useRouter()

    const submitHandler = async (values: FormData) => {
        if (!values.has("title") || values.get("title") === "") {
            return toast({
                title: "Error",
                description: "Bitte gib einen Namen für die Kategorie ein.",
                variant: "destructive"
            })
        }
        const title = values.get("title") as string;
        const result = await addCategory(title.trim()) as CategoryResult

        if (result.status === "success") {
            router.refresh();
            return toast({
                title: "Erfolgreich",
                description: "Neue Kategorie wurde erfolgreich hinzugefügt.",
            })
        } else {
            return toast({
                title: "Fehler",
                description: "Etws ist schief gelaufen, bitte versuche es erneut.",
                variant: "destructive"
            })
        }
    }

    return (
        <form action={submitHandler}>
            <Separator className='my-2' />
            <Label className='mt-2'>Neue Kategorie hinzufügen</Label>
            <Input name="title" type="text" />
            <Button type="submit" className='w-full mt-2'>Hinzufügen</Button>
        </form>
    )
}

export default AddCategoryForm