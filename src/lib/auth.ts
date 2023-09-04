import prisma from "@/lib/db"
import { NextAuthOptions, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "user@ncon.de"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials) {
                if (!credentials?.password || !credentials?.email) {
                    throw new Error("Invalid credentials")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })

                if (!user || !user.password) {
                    throw new Error("Invalid credentials")
                }
                const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
                const debugPassword = await bcrypt.hash(credentials.password, 10);

                // Print entered password hash for debugging & manually adding users to the database.
                console.log("DEBUG PASSWORD")
                console.log(debugPassword)

                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials")
                }

                return {
                    id: user.id,
                    name: user.email,
                    email: "dev@localhost",
                    role: "admin",
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
        updateAge: 30,
        maxAge: 60 * 30,

    },
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as number;
                token.role = user.role;
            }
            return token;
        }
    }
}


export function getSession() {
    return getServerSession(authOptions);
}

export async function getCurrentUser() {
    const session = await getSession();
    return session?.user;
}