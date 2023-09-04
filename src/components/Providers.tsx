"use client"
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children, session }: { children: React.ReactNode, session: Session | null | undefined }) => {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )

}

export default Providers;