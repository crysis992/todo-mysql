/* eslint-disable no-unused-vars */
import type { Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface User {
        id: number
        username?: string | null
        role: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: number
        username?: string | null
        role: string
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: number
            username?: string | null
            role: string
        }
    }
}