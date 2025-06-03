import { useState } from 'react';

function RecipeCard({ title, image, cookTime, servings, ingredients, instructions }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-[320px] h-[560px] [perspective:1000px]" onClick={handleFlip}>
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
          <img src={image} alt={title} className="h-[374px] w-full object-cover" />
          <div className="p-4 flex-grow flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">{title}</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>🍽️ {servings} servings</p>
              <p>⏱️ {cookTime} mins</p>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-3xl shadow-xl overflow-y-auto p-4 text-sm text-gray-700 text-left">
          <h3 className="font-semibold mb-1">Ingredients:</h3>
          <ul className="list-disc list-inside mb-2">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="font-semibold mb-1">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1">
            {instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  );
}

export default RecipeCard;