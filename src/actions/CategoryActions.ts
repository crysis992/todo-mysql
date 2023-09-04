"use server"

import prisma from "@/lib/db"

export type CategoryResult = {
    status: "success" | "error",
    data: any
}

export async function removeCategory(id: number) {

    try {
        const category = await prisma.category.delete({
            where: {
                id: id
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

export async function addCategory(name: string) {
    try {
        const category = await prisma.category.create({
            data: {
                title: name,
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