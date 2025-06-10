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

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative w-full">
      <div className="fixed top-12 right-20 z-30 tracking-wide text-[#5C4033]">
        <div className="relative inline-block w-48">
        <button onClick={() => setShowFilters(!showFilters)}  
        className="bg-transparent px-4 py-2 rounded shadow cursor-pointer hover:bg-gray-100 transition">Filters</button>
        {showFilters && (
        <div className="absolute mt-2 bg-white border rounded shadow p-4 w-48">
          <p>Dropdown content goes here</p>
        </div>
         )}
        </div>
      </div>
      <h1 className="fixed top-12 left-20 text-6xl font-['Monsieur_La_Doulaise'] text-[#5C4033] tracking-wide">eatsy</h1>
      <div className="h-screen flex items-center justify-center">
        <button
          onClick={prevRecipe}
          className="absolute text-7xl text-grey-800 font-extrabold cursor-pointer select-none"
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
          className="absolute text-7xl text-red font-extrabold cursor-pointer select-none"
          style={{ all: 'unset', cursor: 'pointer', position: 'absolute', right: 'calc(50% - 220px)' }}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default App;
