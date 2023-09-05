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
    } catch (error: any) {
        return {
            status: "error",
            data: error.message
        }
    }
}

export async function deleteListEntry(entryId: number) {
    try {
        await prisma.todoEntry.delete({
            where: {
                id: entryId,
            }
        })
        return true;
    } catch (error: any) {
        console.log(error);
        return false;
    }
}

export async function deleteTodoList(listId: number) {
    try {
        await prisma.todolist.delete({
            where: {
                id: listId,
            }
        })
        return true;
    } catch (error: any) {
        console.log(error);
        return false;
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
    } catch (error: any) {
        return {
            status: "error",
            data: error.message
        }
    }
}