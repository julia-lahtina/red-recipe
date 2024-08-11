import { FormEvent, useState } from "react"
import { useCreateRecipeMutation } from "../../store/api/recipe.api"
import { IRecipeData } from "../../types/recipe.types"


const defaultValue: IRecipeData = {
    name: '',
    image: ''
}


export const CreateRecipe = () => {

    const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>Create new recipe: </span>
                <label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={recipe.name}
                        onChange={e => setRecipe({
                            ...recipe,
                            name: e.currentTarget.value
                        })}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Image"
                        value={recipe.image}
                        onChange={e => setRecipe({
                            ...recipe,
                            image: e.currentTarget.value
                        })}
                    />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}