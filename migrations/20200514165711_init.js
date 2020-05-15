exports.up = function(knex) {
    return knex.schema.createTable('recipes', rec => {
        rec.increments()
        rec.string('name', 255).notNullable()
        rec.string('step_name', 255).notNullable()
    })
    .createTable('ingredient_recipes', inRec => {
      inRec.increments()
      inRec.integer('recipe_id').unsigned().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('RESTRICT')
      inRec.integer('ingredient_id').unsigned().references('id').inTable('ingredients').onUpdate('CASCADE').onDelete('RESTRICT')
      inRec.float('ingredient_recipes').notNullable()
  })
    .createTable('ingredients', ing => {
      ing.increments()
      ing.string('name', 255).notNullable()
  })
  };
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes')
    .dropTableIfExists('ingredient_recipes')
    .dropTableIfExists('ingredients')
  };