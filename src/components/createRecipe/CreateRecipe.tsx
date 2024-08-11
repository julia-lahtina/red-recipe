import { useState } from "react"
import { useCreateRecipeMutation } from "../../store/api/recipe.api"


const defaultValue = {
    name: '',
    image: ''
}


export const CreateRecipe = () => {

    const [recipe, setRecipe] = useState(defaultValue)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e) => {
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