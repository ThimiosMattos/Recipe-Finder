const recipes = [
    {
        name: "Kyckling med ris",
        ingredients: ["kyckling", "ris", "broccoli"],
        instructions: "Koka riset. Stek kycklingen på medelhög värme tills den når en innertemperatur av 73&deg;C. Tillsätt broccoli och blanda allt."
    },
    {
        name: "hamburgare",
        ingredients: ["nötkött", "bröd", "ketchup"],
        instructions: "Stek 150g kött på medelhög värme tills pucken har en fin stekyta (ca 2 min per sida), lägg det i brödet och tillsätt ketchup och valfria pålägg. Serveras traditionellt\
        med pommes frites."
    },
    {
        name: "klassisk risotto",
        ingredients: ["arborio ris", "lök", "grönsaksfond", "parmesan"],
        instructions: "1. Finhacka löken och stek den i en stor panna på medelhög värme tills den är mjuk och genomskinlig. 2. Tillsätt arborio riset och stek i cirka 2 minuter, \
        rör om kontinuerligt så att riset blir lätt rostat. 3. Häll i grönsaksfonden, 100 ml i taget, och rör om tills vätskan har absorberats innan du tillsätter mer.\
         Fortsätt tills all fond är använd och riset är krämigt och mjukt. 4. Ta bort pannan från värmen och rör ner riven parmesanost. Smaka av med salt och peppar. Servera genast."
    }
];

// Funktion för att söka recept baserat på ingredienser
function searchRecipes() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const results = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchInput) || 
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );

    displayResults(results);
}

// Funktion för att visa sökresultat
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

// Lägg till eventlyssnare för sökknappen
document.querySelector('.search-bar button').addEventListener('click', searchRecipes);

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchRecipes();
    }
});