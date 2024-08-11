import React from 'react'
import s from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'


interface IRecipeItem {
    recipe: IRecipe
}

export const RecipeItem = ({ recipe }: IRecipeItem) => {

    const favorites = useFavorites()
    const { toggleFavorites } = useActions()

    console.log(favorites)

    const isExist = favorites.some(r => r.id === recipe.id)

    return (
        <div className={s.item}>
            <img src={recipe.image} alt={recipe.name} width={100} />
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}>
                {isExist ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    )
}
