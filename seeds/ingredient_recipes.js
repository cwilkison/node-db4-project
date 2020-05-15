
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipes').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_recipes: "1 spoon" },
        {recipe_id: 1, ingredient_id: 2, ingredient_recipes: "A dash" },
        {recipe_id: 1, ingredient_id: 3, ingredient_recipes: "3 dashes" },
        {recipe_id: 2, ingredient_id: 4, ingredient_recipes: "1 Cup" },
        {recipe_id: 2, ingredient_id: 5, ingredient_recipes: "Half" },
        {recipe_id: 2, ingredient_id: 6, ingredient_recipes: "The whole bag" },

      ]);
    });
};

