import { Header } from "./components/recipeItem/header/Header"
import { RecipeItem } from "./components/recipeItem/RecipeItem"
import { User } from "./components/user/User"


function App() {

  return (
    <section>
      <Header />
      {/*       <User /> */}
      <div>
        <RecipeItem id={1} name="Лазанья" />
        <RecipeItem id={2} name="Каша" />
        <RecipeItem id={3} name="Паста" />
      </div>
    </section>
  )
}

export default App
