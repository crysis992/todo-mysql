import { getCurrentUser } from "@/lib/auth";
import { Button } from "../ui/Button"
import { addTodoList } from "@/actions/TodoActions";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

async function AddTodoList() {

    const session = await getCurrentUser();

    if (!session) {
        return (
            <>
                <p>Du musst eingeloggt sein!</p>
            </>
        )
    }

    const handleSubmit = async (data: FormData) => {
        "use server"
        await addTodoList(data.get("description") as string, session.id)
        redirect('/', RedirectType.replace);
    }

    return (
        <form className="flex flex-col gap-3 mt-7" action={handleSubmit}>
            <input type="text" name="description" placeholder="Name der Liste" className="focus:outline-none border-collapse border-amber-500 border-2 rounded-xl p-1" />
            <Button type="submit" className="rounded-xl">Hinzufügen</Button>
        </form>
    )
}

export default AddTodoList