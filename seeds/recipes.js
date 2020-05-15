
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Cheesburger', step_name: "make the hamburger"},
        {name: 'Salad', step_name: "throw in the lettuce"},
        {name: 'Pizza', step_name: "put cheese on the bread"}
      ]);
    });
};
