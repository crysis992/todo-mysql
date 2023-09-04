import { getCurrentUser } from "@/lib/auth"
import Link from "next/link";
import { buttonVariants } from "../ui/Button";

async function UserPanel() {

    const user = await getCurrentUser();

    if (!user) {
        return (
            <>
                <div>You are not logged in!</div>
                <Link className={buttonVariants({ variant: "default" })} href="/api/auth/signin">Anmelden</Link>
            </>
        )
    }

    return (
        <div>
            <div>Eingeloggt als {user.name}</div>
            <div>ID: {user.id}</div>
            <div>Rolle: {user.role}</div>
            <div>{user.email}</div>
            <Link className={buttonVariants({ variant: "default" })} href="/api/auth/signout">Abmelden</Link>
        </div>
    )
}

export default UserPanel