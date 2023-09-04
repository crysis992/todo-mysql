"use server"

import prisma from "@/lib/db"

export async function addTodoList(description: string, userId: number) {
    try {
        const category = await prisma.todolist.create({
            data: {
                title: description,
                user: {
                    connect: {
                        id: userId,
                    }
                },
                order: 2
            }
        })

        return {
            status: "success",
            data: category
        }
    } catch (error) {
        return {
            status: "error",
            data: error
        }
    }
}

export async function addListEntry(list: number, description: string, title: string, category: number) {
    try {

        const entry = await prisma.todoEntry.create({
            data: {
                title: title,
                todolist: {
                    connect: {
                        id: list,
                    }
                },
                category: {
                    connect: {
                        id: category,
                    }
                },
                task: "empty",
                status: "ACTIVE",
                order: 1
            }
        })
        return {
            status: "success",
            data: entry
        }
    } catch (error) {
        return {
            status: "error",
            data: error
        }
    }
}