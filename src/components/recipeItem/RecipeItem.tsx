import React from 'react'
import s from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { useGetRecipesQuery } from '../../store/api/api'

type RecipeItem = {
    id: number
    name: string
}

export const RecipeItem = (recipe: RecipeItem) => {

    const { data } = useGetRecipesQuery()
    console.log(data)

    const favorites = useFavorites()
    const { toggleFavorites } = useActions()

    console.log(favorites)

    const isExist = favorites.some(r => r.id === recipe.id)

    return (
        <div className={s.item}>
            {/* <img src="" alt="" /> */}
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}>
                {isExist ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    )
}
