const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get posts" });
      });
  });

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
  .then(recipe => {
    res.json(recipe);
  })
  .catch(err => {
    res.status(500).json({ message: "failed to get recipes "});
  });
});
  
router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
  .then(steps => {
    res.json(steps);
  })
  .catch(err => {
    res.status(500).json({ message: "failed to get instructions "});
  });
});

module.exports = router;