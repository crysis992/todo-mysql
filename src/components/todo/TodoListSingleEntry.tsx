"use client"
import { useState } from "react"
import { Badge } from "../ui/Badge"
import { Label } from "../ui/Label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog"
import { Button } from "../ui/Button"
import { deleteListEntry } from "@/actions/TodoActions"
import { useRouter } from "next/navigation"

interface TodoListSingleEntryProps {
    id: number
    categoryTitle: string
    todoTitle: string
    listName: string
}

function TodoListSingleEntry({ id, categoryTitle, todoTitle, listName }: TodoListSingleEntryProps) {
    const [done, setDone] = useState(false)
    const router = useRouter();

    const submitDeletion = async () => {
        console.log("Deleting id", id)
        const response = await deleteListEntry(id);
        if (!response) {
            setDone((prev) => !prev);
        } else {
            router.refresh();
        }
    }

    return (
        <li className="cursor-default  select-none group" onDoubleClick={() => setDone((prev) => !prev)}>
            <Badge className="text-xs py-0.5 px-1 cursor-default mr-2 " >{categoryTitle}</Badge>
            <Label className={`${done ? "line-through" : null}`}>{todoTitle}</Label>

            <Dialog>
                <DialogTrigger>
                    <span className="no-underline ml-2 text-xs font-bold text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:underline">Löschen</span>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Eintrag löschen?</DialogTitle>
                        <DialogDescription>
                            Diese Aktion wird den Eintrag <span className="font-bold underline">{todoTitle}</span> aus der Liste <span className="font-bold underline">{listName}</span> löschen.
                        </DialogDescription>
                        <form action={submitDeletion}>
                            <Button variant={"destructive"}>Löschen</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </li>
    )
}

export default TodoListSingleEntry