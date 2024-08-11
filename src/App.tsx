import { CreateRecipe } from "./components/createRecipe/CreateRecipe"
import { Header } from "./components/recipeItem/header/Header"
import { RecipeItem } from "./components/recipeItem/RecipeItem"
import { User } from "./components/user/User"
import { useGetRecipesQuery } from "./store/api/api"


function App() {

  const { isLoading, data } = useGetRecipesQuery()
  console.log(data)

  return (
    <section>
      <Header />
      {/*       <User /> */}
      <CreateRecipe />
      <div>
        {isLoading
          ? <div>Loading...</div>
          : data ? data.map(recipe => {
            return <RecipeItem key={recipe.id} recipe={recipe} />
          }) : <div>Not found</div>
        }

      </div>
    </section>
  )
}

export default App
