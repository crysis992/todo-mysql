import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/db"
import TodoList from "./TodoList";
import sql, { empty, join, raw } from "sql-template-tag";

async function TodoCard() {
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
            }
        }),
        prisma.category.findMany()
    ])

    // Raw SQL query test
    // const query = sql`SELECT Todolist.title, Todolist.id, Todolist.createdAt, Category.title AS category, (SELECT Todolist.userId FROM Todolist WHERE Todolist.id = id LIMIT 1) AS test, (SELECT User.email FROM User WHERE User.id = test LIMIT 1) AS blub FROM Todolist INNER JOIN User ON Todolist.userId = User.id LEFT JOIN TodoEntry ON TodoEntry.TodolistId = Todolist.id LEFT JOIN Category ON TodoEntry.categoryId = Category.id WHERE Todolist.userId=2 ORDER BY TodoEntry.createdAt DESC LIMIT 2;`
    // const test = await prisma.$queryRaw(query);
    // console.log("==TEST==")
    // console.log(test);



    return (
        <>
            {lists.map((todoList) => (
                <TodoList key={todoList.id} categories={categories} list={todoList} />
            ))}
        </>
    )
}

export default TodoCard