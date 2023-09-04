import { Category, TodoEntry, Todolist } from "@prisma/client"
import AddTodoEntryForm from "./AddTodoEntryForm"
import { Badge } from "../ui/Badge"
import { Label } from "../ui/Label"

interface ExtendedTodoEntry extends TodoEntry {
    category: {
        title: string
    }
}

interface TodoListProps {
    userid: number
    list: Todolist & { TodoEntry: ExtendedTodoEntry[], _count: { TodoEntry: number } | null | undefined }
    categories: Category[]
}

function TodoList({ userid, list, categories }: TodoListProps) {


    return (
        <>
            <h2 className="flex items-center gap-2 cursor-default font-bold">{list.title} ({list._count?.TodoEntry}) <AddTodoEntryForm categories={categories} listId={list.id} /></h2>
            <ul className="list-disc ml-5 marker:text-amber-950">
                {list.TodoEntry.map((todoEntry) => (
                    <li key={todoEntry.id} className="cursor-default"><Label>{todoEntry.title}</Label> <Badge className="text-xs py-0.5 px-1 cursor-default" >{todoEntry.category.title}</Badge></li>
                ))}
            </ul>
        </>
    )
}

export default TodoList