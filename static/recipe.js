document.addEventListener("DOMContentLoaded", function() {

    var searchInput = document.querySelector(".search input");
    var submitButton = document.querySelector(".submit a");


    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        toggleSearch(); 
    });


    function toggleSearch() {
        if (searchInput.style.display === "none" || searchInput.style.display === "") {
            searchInput.style.display = "block"; 
        } else {
            searchInput.style.display = "none"; 
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    
    var registerButton = document.getElementById("register-button");
    var loginButton = document.getElementById("login-button");


    registerButton.addEventListener("click", showRegistrationForm);
    loginButton.addEventListener("click", showLoginForm);
});

function showRegistrationForm() {

    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function showLoginForm() {

    document.getElementById('login-form').style.display = 'block';
    document.getElementById('registration-form').style.display = 'none';
}

    ingredientFilter.addEventListener('input', function() {
        const filterValue = ingredientFilter.value.toLowerCase();
        const recipes = document.querySelectorAll('.recipe-card');

        recipes.forEach(function(recipe) {
            const ingredients = recipe.querySelector('p.ingredients').textContent.toLowerCase();
            if (ingredients.includes(filterValue)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });

    function displayRecipe(recipe) {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <h3>Ingredients:</h3>
            <p class="ingredients">${recipe.ingredients}</p>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;
        recipesContainer.appendChild(recipeCard);
    }
