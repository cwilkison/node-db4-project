const db = require("../data/db-config");



module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};


function getRecipes() {
    return db("recipes");
  }

  function getInstructions(id){
    return db('recipes')
    .where({ id })
    .select('recipes.step_name')
    .first()
  }

function getShoppingList(recipe_id) {
    return db("ingredient_recipes as ir")
    .select("ingredients.name", "ir.ingredient_recipes")
    .where({ recipe_id })
    .join('ingredients', 'ingredients.id', 'ir.ingredient_id')

}
