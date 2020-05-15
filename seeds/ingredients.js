
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'cheese'},
        {name: 'ham'},
        {name: 'lettuce'},
        {name: 'ketchup'},
        {name: 'mustard'},
        {name: 'salt'},
        {name: 'sugar'},
        {name: 'bread'},
        {name: 'mayo'},

      ]);
    });
};
