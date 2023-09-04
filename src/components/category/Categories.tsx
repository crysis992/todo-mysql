import prisma from "@/lib/db"
import AddCategoryForm from "./AddCategoryForm";
import RemoveCategoryButton from "./RemoveCategoryButton";
import { removeCategory } from "@/actions/CategoryActions";
import { getCurrentUser } from "@/lib/auth";

async function getCategories() {
    const categories = await prisma.category.findMany();
    return categories;
}

async function Categories() {
    const categories = await getCategories();
    const session = await getCurrentUser();

    if (!session) {
        return (
            <>
                <p>Du musst eingeloggt sein!</p>
            </>
        )
    }

    return (
        <>
            {categories.map((category) => (<RemoveCategoryButton id={category.id} key={category.id}>{category.title}</RemoveCategoryButton>))}
            <AddCategoryForm categories={categories.map((category) => category.title)} />
        </>
    )
}

export default Categories