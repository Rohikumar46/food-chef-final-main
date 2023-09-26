const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: String,
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [ingredientSchema],
  procedure: [String], 
});

mongoose.model('Recipe', recipeSchema);
mongoose.model('Ingredient', ingredientSchema);
