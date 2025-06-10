const recipes = [
  {
    id: 1,
    title: "Homemade Spaghetti",
    image: "/images/spaghetti.jpg",
    cookTime: 30,
    servings: 4,
    ingredients: [
      "400g spaghetti",
      "2 tbsp olive oil",
      "2 garlic cloves, minced",
      "400g canned tomatoes",
      "Salt and pepper to taste",
      "Fresh basil (optional)",
      "Grated parmesan cheese"
    ],
    instructions: [
      "Boil a large pot of salted water and cook the spaghetti until al dente.",
      "Heat olive oil in a pan, add garlic and sauté for 1 minute.",
      "Add canned tomatoes, simmer for 15 minutes, season with salt and pepper.",
      "Drain spaghetti and mix with the sauce.",
      "Serve with fresh basil and grated parmesan on top."
    ],
    tags: ["italian", "pasta", "dinner", "vegetarian"]
  },
  {
    id: 2,
    title: "Chicken Alfredo",
    image: "/images/alfredo.jpg",
    cookTime: 45,
    servings: 4,
    ingredients: [
      "2 chicken breasts, sliced",
      "250g fettuccine",
      "2 tbsp butter",
      "2 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "Salt and black pepper"
    ],
    instructions: [
      "Cook the fettuccine in salted boiling water until al dente.",
      "In a pan, melt butter and sauté garlic until fragrant.",
      "Add sliced chicken and cook until no longer pink.",
      "Pour in cream and simmer for 5 minutes.",
      "Stir in parmesan, add cooked pasta, and season to taste.",
      "Serve hot with extra parmesan on top."
    ],
    tags: ["italian", "pasta", "dinner", "chicken"]
  },
  {
    id: 3,
    title: "Beef Stroganoff",
    image: "/images/stroganoff.jpg",
    cookTime: 25,
    servings: 6,
    ingredients: [
      "500g beef sirloin, sliced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "200g mushrooms, sliced",
      "1 tbsp flour",
      "1 cup beef broth",
      "1/2 cup sour cream",
      "2 tbsp oil",
      "Salt and pepper"
    ],
    instructions: [
      "Heat oil in a pan, sear beef slices, and set aside.",
      "In the same pan, cook onions and garlic until soft.",
      "Add mushrooms and sauté until golden.",
      "Sprinkle in flour, stir, then add beef broth.",
      "Return beef to the pan, simmer for 20 mins.",
      "Stir in sour cream, season with salt and pepper, and serve over rice or noodles."
    ],
    tags: [ "beef", "dinner", "pasta"]
  },
  {
    id: 4,
    title: "Traditional Zeppole",
    image: "/images/zeppole.jpg",
    cookTime: 45,
    servings: 4,
    ingredients: [
      "1 cup flour",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1 tbsp sugar",
      "2/3 cup water",
      "Vegetable oil for frying",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Mix flour, baking powder, salt, and sugar in a bowl.",
      "Stir in water to form a thick batter.",
      "Heat oil in a deep pan to 180°C.",
      "Drop spoonfuls of batter into oil and fry until golden brown.",
      "Drain on paper towels and dust with powdered sugar.",
      "Serve warm."
    ],
    tags: ["italian", "dessert", "snack"]
  },
  {
    id: 5,
    title: "Classic Pancakes",
    image: "/images/pancakes.jpg",
    cookTime: 20,
    servings: 4,
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 tsp baking powder",
      "1 tsp salt",
      "1 tbsp sugar",
      "1 1/4 cups milk",
      "1 egg",
      "3 tbsp melted butter",
      "Butter or oil for cooking"
    ],
    instructions: [
      "In a large bowl, sift together the flour, baking powder, salt, and sugar.",
      "Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
      "Cook until bubbles form and edges are dry, then flip and cook until browned on the other side.",
      "Serve hot with syrup, butter, or your favourite toppings."
    ],
    tags: ["snack", "breakfast", "dessert", "american", "quick"]
  },
  {
    id: 6,
    title: "Beef Burger",
    image: "/images/beef-burger.jpg",
    cookTime: 30,
    servings: 4,
    ingredients: [
      "500g ground beef",
      "4 burger buns",
      "1 onion, sliced",
      "Lettuce leaves",
      "4 slices cheddar cheese",
      "Salt and pepper",
      "Ketchup and mustard"
    ],
    instructions: [
      "Shape ground beef into 4 patties, season with salt and pepper.",
      "Grill or pan-fry patties for 4–5 minutes each side.",
      "Toast buns lightly and add cheese on hot patties to melt.",
      "Assemble with lettuce, onion, condiments, and serve hot."
    ],
    tags: ["american", "beef", "dinner", "lunch"]
  },
  {
    id: 7,
    title: "Shakshuka",
    image: "/images/shakshuka.jpg",
    cookTime: 25,
    servings: 2,
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, chopped",
      "1 red capsicum, chopped",
      "2 cloves garlic, minced",
      "400g canned tomatoes",
      "4 eggs",
      "Salt, pepper, paprika",
      "Fresh parsley"
    ],
    instructions: [
      "Heat oil in a pan, sauté onion, capsicum, and garlic until soft.",
      "Add tomatoes and spices, simmer for 10 mins.",
      "Make wells in the sauce, crack in eggs.",
      "Cover and cook until whites set. Garnish with parsley and serve."
    ],
    tags: [ "breakfast", "dinner", "vegetarian", "healthy"]
  },
  {
    id: 8,
    title: "Vegetable Omelette",
    image: "/images/veg-omelette.jpg",
    cookTime: 15,
    servings: 1,
    ingredients: [
      "2 eggs",
      "1/4 cup diced capsicum",
      "1/4 cup chopped spinach",
      "1/4 cup chopped onion",
      "Salt and pepper",
      "1 tbsp butter"
    ],
    instructions: [
      "Beat eggs with salt and pepper.",
      "Melt butter in a pan, sauté vegetables briefly.",
      "Pour in eggs, cook until set, fold and serve hot."
    ],
    tags: ["vegetarian", "breakfast", "quick", "healthy"]
  },
  {
    id: 9,
    title: "Chicken Curry",
    image: "/images/chicken-curry.jpg",
    cookTime: 40,
    servings: 4,
    ingredients: [
      "500g chicken thighs, diced",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "1 tbsp curry powder",
      "1 tsp turmeric",
      "400ml coconut milk",
      "Salt and oil"
    ],
    instructions: [
      "Sauté onion and garlic in oil until soft.",
      "Add spices, then chicken, and brown.",
      "Pour in coconut milk, simmer for 25 mins.",
      "Season and serve with rice or naan."
    ],
    tags: ["indian", "dinner", "chicken","rice"]
  },
  {
    id: 10,
    title: "Pumpkin Soup",
    image: "/images/pumpkin-soup.jpg",
    cookTime: 35,
    servings: 4,
    ingredients: [
      "1kg pumpkin, peeled and chopped",
      "1 onion, chopped",
      "2 cups vegetable stock",
      "1 cup water",
      "1/2 cup cream",
      "Salt and pepper"
    ],
    instructions: [
      "Cook onion and pumpkin in a pot until soft.",
      "Add stock and water, simmer 20 mins.",
      "Blend until smooth, stir in cream, season, and serve warm."
    ],
    tags: ["vegetarian", "soup"]
  },
  {
    id: 11,
    title: "French Onion Soup",
    image: "/images/french-onion-soup.jpg",
    cookTime: 50,
    servings: 4,
    ingredients: [
      "4 large onions, thinly sliced",
      "2 tbsp butter",
      "1 tbsp flour",
      "1.2L beef stock",
      "Salt and pepper",
      "Slices of baguette",
      "Grated gruyère cheese"
    ],
    instructions: [
      "Cook onions in butter until deeply caramelised.",
      "Add flour, stir, then pour in stock. Simmer 20 mins.",
      "Ladle soup into bowls, top with bread and cheese.",
      "Grill until cheese bubbles, serve hot."
    ],
    tags: ["soup", "vegetarian"]
  },
  {
    id: 12,
    title: "Garlic Prawns",
    image: "/images/garlic-prawns.jpg",
    cookTime: 20,
    servings: 2,
    ingredients: [
      "300g prawns, peeled and deveined",
      "2 tbsp butter",
      "4 garlic cloves, minced",
      "1 tbsp lemon juice",
      "Chopped parsley",
      "Salt and pepper"
    ],
    instructions: [
      "Melt butter in a pan, add garlic, cook 1 minute.",
      "Add prawns and cook until pink.",
      "Stir in lemon juice, season, sprinkle parsley, and serve."
    ],
    tags: ["seafood", "dinner", "quick"]
  },
  {
    id: 13,
    title: "Chocolate Chip Cookies",
    image: "/images/choc-chip-cookies.jpg",
    cookTime: 25,
    servings: 12,
    ingredients: [
      "1 cup butter, softened",
      "1 cup sugar",
      "1 cup brown sugar",
      "2 eggs",
      "2 tsp vanilla",
      "3 cups flour",
      "1 tsp baking soda",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Cream butter and sugars. Add eggs and vanilla.",
      "Mix in flour and baking soda, fold in choc chips.",
      "Scoop onto baking tray and bake 10–12 minutes."
    ],
    tags: ["dessert", "snack"]
  },
  {
    id: 14,
    title: "Vegetable Stir Fry",
    image: "/images/veg-stir-fry.jpg",
    cookTime: 20,
    servings: 3,
    ingredients: [
      "2 cups broccoli florets",
      "1 carrot, sliced",
      "1 capsicum, sliced",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 clove garlic, minced"
    ],
    instructions: [
      "Heat sesame oil, sauté garlic briefly.",
      "Add vegetables, stir-fry 5–7 mins.",
      "Add soy sauce, toss well, and serve hot."
    ],
    tags: ["vegetarian", "dinner", "asian","rice", "quick"]
  },
  {
    id: 15,
    title: "Beef Tacos",
    image: "/images/beef-tacos.jpg",
    cookTime: 25,
    servings: 4,
    ingredients: [
      "500g ground beef",
      "1 onion, chopped",
      "1 packet taco seasoning",
      "8 taco shells",
      "Lettuce, tomato, cheese for toppings"
    ],
    instructions: [
      "Cook onion and beef in a pan until browned.",
      "Add taco seasoning and water, simmer 10 mins.",
      "Fill taco shells with beef and toppings. Serve."
    ],
    tags: ["beef", "dinner", "mexican"]
  },
  {
    id: 16,
    title: "BBQ Ribs",
    image: "/images/bbq-ribs.jpg",
    cookTime: 120,
    servings: 4,
    ingredients: [
      "1.5kg pork ribs",
      "1 cup BBQ sauce",
      "Salt and pepper",
      "1 tsp paprika"
    ],
    instructions: [
      "Preheat oven to 160°C. Season ribs with salt, pepper, and paprika.",
      "Wrap in foil and bake for 90 mins.",
      "Brush with BBQ sauce and grill or bake uncovered for 30 mins."
    ],
    tags: ["pork", "dinner", "american"]
  },
  {
    id: 17,
    title: "Chicken Tacos",
    image: "/images/chicken-tacos.jpg",
    cookTime: 25,
    servings: 4,
    ingredients: [
      "2 chicken breasts, shredded",
      "1 tsp cumin",
      "1 tsp paprika",
      "8 small tortillas",
      "Sour cream, lettuce, salsa"
    ],
    instructions: [
      "Cook chicken with spices until browned.",
      "Warm tortillas, fill with chicken and toppings.",
      "Serve immediately."
    ],
    tags: ["chicken", "dinner", "mexican"]
  },
  {
    id: 18,
    title: "Quinoa Salad",
    image: "/images/quinoa-salad.jpg",
    cookTime: 20,
    servings: 4,
    ingredients: [
      "1 cup quinoa",
      "2 cups water",
      "1 cucumber, diced",
      "1 tomato, chopped",
      "1/4 cup feta",
      "2 tbsp olive oil",
      "1 tbsp lemon juice"
    ],
    instructions: [
      "Cook quinoa in water, let cool.",
      "Mix with vegetables, feta, and dressing.",
      "Serve chilled or at room temperature."
    ],
    tags: ["vegetarian", "lunch","healthy", "salad", "quick"]
  },
  {
    id: 19,
    title: "Lasagna",
    image: "/images/lasagna.jpg",
    cookTime: 60,
    servings: 6,
    ingredients: [
      "500g beef mince",
      "1 onion, chopped",
      "400g canned tomatoes",
      "250g lasagna sheets",
      "500ml béchamel sauce",
      "1 cup grated cheese"
    ],
    instructions: [
      "Cook beef and onion, add tomatoes, simmer 20 mins.",
      "Layer meat sauce, lasagna sheets, béchamel in dish.",
      "Top with cheese, bake at 180°C for 40 mins."
    ],
    tags: ["italian", "dinner", "beef","pasta"]
  },
  {
    id: 20,
    title: "Caesar Salad",
    image: "/images/caesar-salad.jpg",
    cookTime: 15,
    servings: 2,
    ingredients: [
      "1 cos lettuce",
      "1/2 cup croutons",
      "1/4 cup grated parmesan",
      "2 tbsp Caesar dressing",
      "1 boiled egg (optional)",
      "Anchovies (optional)"
    ],
    instructions: [
      "Chop lettuce, toss with dressing.",
      "Add croutons, parmesan, and optional toppings.",
      "Serve immediately."
    ],
    tags: ["italian", "salad", "quick"]
  },
  {
    id: 21,
    title: "Tomato Basil Soup",
    image: "/images/tomato-basil-soup.jpg",
    cookTime: 30,
    servings: 4,
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "800g canned tomatoes",
      "1 cup vegetable stock",
      "1/2 cup fresh basil leaves",
      "Salt and pepper",
      "1/4 cup cream (optional)"
    ],
    instructions: [
      "Sauté onion and garlic in olive oil until soft.",
      "Add tomatoes and stock, simmer for 15 mins.",
      "Add basil, blend until smooth.",
      "Stir in cream (if using), season to taste, and serve."
    ],
    tags: ["italian", "soup", "vegetarian", "lunch"]
  },
  {
    id: 22,
    title: "Margherita Pizza",
    image: "/images/margherita-pizza.jpg",
    cookTime: 20,
    servings: 2,
    ingredients: [
      "1 pizza base",
      "1/2 cup tomato sauce",
      "150g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat oven to 220°C.",
      "Spread tomato sauce on the base, top with mozzarella and basil.",
      "Drizzle with olive oil, sprinkle with salt.",
      "Bake for 12–15 mins or until crust is golden."
    ],
    tags: ["italian", "dinner", "vegetarian", "lunch", "quick"]
  },
  {
    id: 23,
    title: "Colourful Fried Rice",
    image: "/images/fried-rice.jpg",
    cookTime: 20,
    servings: 4,
    ingredients: [
      "3 cups cooked black rice",
      "2 eggs, beaten",
      "1/2 cup peas",
      "1/2 cup diced carrots",
      "1/2 cup corn",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil"
    ],
    instructions: [
      "Heat sesame oil in a pan, scramble eggs, and set aside.",
      "Stir-fry vegetables until tender.",
      "Add rice and soy sauce, mix well.",
      "Stir in eggs, cook for 2 more minutes, and serve."
    ],
    tags: ["asian", "dinner", "rice", "vegetarian", "lunch", "quick"]
  },
  {
    id: 24,
    title: "UK Fish and Chips",
    image: "/images/fish-and-chips.jpg",
    cookTime: 45,
    servings: 2,
    ingredients: [
      "2 white fish fillets (e.g. cod or haddock)",
      "1 cup flour",
      "1/2 tsp baking powder",
      "3/4 cup cold sparkling water",
      "4 potatoes, cut into chips",
      "Salt and oil for frying"
    ],
    instructions: [
      "Heat oil to 180°C and fry chips until golden, drain.",
      "Mix flour, baking powder, and water to form batter.",
      "Dip fish into batter and fry until crispy and golden.",
      "Serve fish with chips and a sprinkle of salt."
    ],
    tags: [ "dinner", "seafood", "lunch"]
  },
  {
    id: 25,
    title: "Greek Salad",
    image: "/images/greek-salad.jpg",
    cookTime: 10,
    servings: 4,
    ingredients: [
      "2 tomatoes, chopped",
      "1 cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "100g feta cheese, cubed",
      "2 tbsp olive oil",
      "1 tbsp red wine vinegar",
      "Salt and oregano"
    ],
    instructions: [
      "Combine tomatoes, cucumber, onion, and olives in a bowl.",
      "Add feta on top, drizzle with olive oil and vinegar.",
      "Sprinkle with oregano and salt, then toss and serve."
    ],
    tags: [ "salad", "vegetarian", "lunch"]
  } 
];

export default recipes;