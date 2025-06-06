import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeCard from './components/RecipeCard'
import recipes from './data/mockRecipes';

function App() {
  
  const [currentRecipe, setCurrentRecipe] = useState(0);
  
  const nextRecipe = () => {
    setCurrentRecipe((currentRecipe + 1) % recipes.length);
  }
  
  const prevRecipe = () => {
    setCurrentRecipe((currentRecipe - 1 + recipes.length) % recipes.length);
  }
  
  const recipe = recipes[currentRecipe];
  
  return (
    <div className="h-screen flex items-center justify-center relative">
      <button
  onClick={prevRecipe}
  className="absolute left-8 text-7xl text-grey-800 font-extrabold cursor-pointer select-none"
  style={{ all: 'unset', cursor: 'pointer', position: 'absolute', left: 'calc(50% - 220px)' }}
>
  ‹
</button>
      <div>
        <RecipeCard 
        title={recipe.title}
        image={recipe.image}
        cookTime={recipe.cookTime}
        servings={recipe.servings}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        />
      </div>
      <button
  onClick={nextRecipe}
  className="absolute right-8 text-7xl text-red font-extrabold cursor-pointer select-none"
  style={{ all: 'unset', cursor: 'pointer', position: 'absolute', right: 'calc(50% - 220px)' }}
>
  ›
</button>
    </div>
  );
}

export default App;
