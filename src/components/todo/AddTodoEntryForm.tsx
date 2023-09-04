
"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { Button } from "../ui/Button"
import { Textarea } from "../ui/Textarea"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Category } from "@prisma/client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select"
import Link from "next/link"
import { addListEntry } from "@/actions/TodoActions"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface AddTodoEntryFormProps {
    listId: number
    categories: Category[]
}

const TodoEntrySchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(2, { message: "Description must be at least 2 characters." }),
    category: z.string().refine(check => check !== "-1", { message: "Category must be selected." })
})

type TodoEntryType = z.infer<typeof TodoEntrySchema>

function AddTodoEntryForm({ listId, categories }: AddTodoEntryFormProps) {

    const router = useRouter();

    const [dialogOpen, setDialogOpen] = useState(false);

    const form = useForm<TodoEntryType>({
        resolver: zodResolver(TodoEntrySchema),
        defaultValues: {
            title: "",
            description: "",
            category: "-1"
        }
    });

    const onSubmit = async (data: TodoEntryType) => {
        const result = await addListEntry(listId, data.description, data.title, Number.parseInt(data.category));
        if (result.status === "success") {
            form.reset();
            setDialogOpen(false);
            router.refresh();
        }
    }

    const handleOpenChange = (open: boolean) => {
        setDialogOpen(open);
    }


    return (
        <Dialog onOpenChange={handleOpenChange} open={dialogOpen}>
            <DialogTrigger>
                <div className="font-bold text-green-600 text-xl">+</div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Füge einen neuen Eintrag hinzu</DialogTitle>
                    <DialogDescription>
                        Füge deinem Account einen neuen Eintrag hinzu. Dieser Eintrag wird der
                        ausgewählten Liste hinzugefügt.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Titel</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Meine wichtige Aufgabe.." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Titel des Eintrags
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Beschreibung</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Eine Beschreibung.." {...field} className="resize-none" rows={6} />
                                    </FormControl>
                                    <FormDescription>
                                        Beschreibe dein Todo ausfürlicher
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Kategorie</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a verified email to display" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem disabled value="-1">Wähle eine Kategorie</SelectItem>
                                            {categories.map((category) => (
                                                <SelectItem key={category.id} value={category.id.toString()}>{category.title}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Du kannst weitere Kategorien in der Übersicht hinzufügen.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <Button type="submit">Hinzufügen</Button>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>

    )
}

export default AddTodoEntryForm