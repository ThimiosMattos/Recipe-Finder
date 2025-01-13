document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('message').innerText = 'Ditt recept har skickats in!';

    document.getElementById('recipe-form').reset();
});