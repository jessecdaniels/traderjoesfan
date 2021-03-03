
// Problem: Create a website which main feature is a recipe search using Trader Joes product as the input
// Solution: Use public API to get create recipe search and print out

// Connect to the API URL https://traderjoeapi.jackgisel.com/api/recipes
// Read the data
// Parse the data
// Print the data

// possible features: 
    // show a visual of the products needed from a recipe pulled from 
    // searching for low sodium items via CSV
    // link and display Trader Joes social media accounts
    // contact form  

// -----------
// const https = require('https');

// const request = https.get('https://traderjoeapi.jackgisel.com/api/recipes', function(response) {
// console.log(response.statusCode);
// });
// ------------

document.addEventListener('DOMContentLoaded', () => {
const searchBtn = document.querySelector('.recipe-button');
const randomRecipe = document.querySelector('.random-recipe'); 
const recipeDisplay = document.querySelector('recipe-display');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function getData() {
fetch('https://traderjoeapi.jackgisel.com/api/recipes')
  .then(response => 
    return response.json())
  .then(data => {
      console.log(data)
      const title = data[0].title
      const ingredients = data[0].ingredients.

      randomRecipe.innerHTML = title + ingredients
      directionsDisplay.innerHTML = directions
})
}

startBtn.addEventListener('click', getData)
})