import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/db"
import TodoList from "./TodoList";

async function TodoEntry() {
    const session = await getCurrentUser();

    if (!session) {
        return (
            <>
                <p>Du musst eingeloggt sein!</p>
            </>
        )
    }

    const [lists, categories] = await prisma.$transaction([
        prisma.todolist.findMany({
            where: {
                userId: session.id
            },
            include: {
                TodoEntry: {
                    orderBy: {
                        createdAt: "desc"
                    },
                    include: {
                        category: {
                            select: {
                                title: true
                            }
                        }
                    }
                },
                user: true,
                _count: {
                    select: {
                        TodoEntry: true
                    }
                }
            }
        }),
        prisma.category.findMany()
    ])

    return (
        <>
            {lists.map((todoList) => (
                <TodoList key={todoList.id} userid={session.id} categories={categories} list={todoList} />
            ))}
        </>
    )
}

export default TodoEntry