import { Category, TodoEntry, Todolist } from "@prisma/client"
import AddTodoEntryForm from "./AddTodoEntryForm"
import TodoListSingleEntry from "./TodoListSingleEntry"
import DeleteListButton from "./DeleteListButton"

interface ExtendedTodoEntry extends TodoEntry {
    category: {
        title: string
    }
}

interface TodoListProps {
    list: Todolist & { TodoEntry: ExtendedTodoEntry[] }
    categories: Category[]
}

function TodoList({ list, categories }: TodoListProps) {


    return (
        <>
            <h2 className="flex items-center gap-2 cursor-default font-bold">
                {list.title} ({list.TodoEntry.length}) <AddTodoEntryForm categories={categories} listId={list.id} />
                <DeleteListButton listId={list.id} listName={list.title} />
            </h2>
            <ul className="list-disc ml-5 marker:text-amber-950">
                {list.TodoEntry.map((todoEntry) => (
                    <TodoListSingleEntry key={todoEntry.id} id={todoEntry.id} categoryTitle={todoEntry.category.title} todoTitle={todoEntry.title} listName={list.title} />
                ))}
            </ul>
        </>
    )
}

export default TodoList