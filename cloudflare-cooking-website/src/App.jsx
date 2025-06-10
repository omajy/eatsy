import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeCard from './components/RecipeCard'
import recipes from './data/mockRecipes';

function App() {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const allTags = Array.from(new Set(recipes.flatMap(recipe => recipe.tags))).sort();

  function handleTagToggle(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  const filteredRecipes =
  selectedTags.length === 0
    ? recipes
    : recipes.filter(recipe =>
        selectedTags.every(tag => recipe.tags.includes(tag))
      );

  useEffect(() => {
    if (currentRecipe >= filteredRecipes.length && filteredRecipes.length > 0) {
      setCurrentRecipe(0);
    }
  }, [currentRecipe, filteredRecipes]);
  

  
  const nextRecipe = () => {
    setCurrentRecipe((currentRecipe + 1) % filteredRecipes.length);
  }
  
  const prevRecipe = () => {
    setCurrentRecipe((currentRecipe - 1 + filteredRecipes.length) % filteredRecipes.length);
  }
  
  const recipe = filteredRecipes.length > 0 && currentRecipe < filteredRecipes.length ? filteredRecipes[currentRecipe] : null;


  return (
    <div className="relative w-full">
      <div className="fixed top-12 right-20 z-30 tracking-wide text-[#5C4033]">
        <div className="relative inline-block w-48">
        <button onClick={() => setShowFilters(!showFilters)}  
        className="bg-transparent px-4 py-2 font-['Sora'] text-[#5C4033] border rounded shadow cursor-pointer hover:bg-gray-100 focus:ring-[#5C4033] transition">Filters</button>
        {showFilters && (
        <div className="absolute mt-2 bg-white border rounded shadow p-4 w-48 text-left">
          {allTags.map(tag => (
  <label key={tag} className="block cursor-pointer">
    <input
  type="checkbox"
  checked={selectedTags.includes(tag)}
  onChange={() => handleTagToggle(tag)}
  className="custom-checkbox mr-2"
/>
    {tag}
  </label>
))}
        </div>
         )}
        </div>
      </div>
      <h1 className="fixed top-12 left-20 text-6xl font-['Monsieur_La_Doulaise'] text-[#5C4033] tracking-wide">eatsy</h1>
      <div className="h-screen flex items-center justify-center">
        {filteredRecipes.length > 0 && (<button
          onClick={prevRecipe}
          className="absolute text-7xl text-grey-800 font-extrabold cursor-pointer select-none"
          style={{ all: 'unset', cursor: 'pointer', position: 'absolute', left: 'calc(50% - 220px)' }}
        >
          ‹
        </button>)}
        <div>
        <div>
        {recipe ? (
  <RecipeCard 
    title={recipe.title}
    image={recipe.image}
    cookTime={recipe.cookTime}
    servings={recipe.servings}
    ingredients={recipe.ingredients}
    instructions={recipe.instructions}
  />
) : (
  <p className="text-center text-xl font-['Sora'] text-[#5C4033]">
    sorry, no recipes match. stay tuned for more recipes!
  </p>
)}
</div>
        </div>
        {filteredRecipes.length > 0 && (<button
          onClick={nextRecipe}
          className="absolute text-7xl text-red font-extrabold cursor-pointer select-none"
          style={{ all: 'unset', cursor: 'pointer', position: 'absolute', right: 'calc(50% - 220px)' }}
        >
          ›
        </button>)}
      </div>
    </div>
  );
}

export default App;
