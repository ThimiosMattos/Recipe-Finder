// Function to fetch recipes from the server
async function fetchRecipes() {
    const response = await fetch('/recipes');
    const recipes = await response.json();
    return recipes;
}

// Function to search recipes based on ingredients
async function searchRecipes() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    console.log('Search input:', searchInput);

    const recipes = await fetchRecipes();
    console.log('Fetched recipes:', recipes);

    const results = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchInput) || 
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );

    console.log('Search results:', results);
    displayResults(results);
}

// Function to display search results
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>${recipe.instructions}</p>
            `;
            resultsContainer.appendChild(recipeElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>Inga recept hittades.</p>';
    }
}

// Add event listeners for the search button
document.querySelector('.search-bar button').addEventListener('click', searchRecipes);

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchRecipes();
    }
});