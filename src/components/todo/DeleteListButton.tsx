"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/AlertDialog"
import { Button } from "../ui/Button"
import { deleteListEntry, deleteTodoList } from "@/actions/TodoActions"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface DeleteListButtonProps {
    listId: number
    listName: string
}

function DeleteListButton({ listId, listName }: DeleteListButtonProps) {
    const router = useRouter();

    const submitDeletion = async () => {
        console.log("Deleting list id", listId)
        await deleteTodoList(listId);
        router.refresh();
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <span className="no-underline text-xs font-bold text-red-500 cursor-pointer hover:underline">X</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Eintrag löschen?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Diese Aktion wird die Liste <span className="font-bold underline">{listName}</span> und alle Einträge löschen!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                    <form action={submitDeletion}>
                        <AlertDialogAction type="submit">Löschen</AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteListButton