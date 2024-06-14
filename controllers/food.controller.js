const { addNewFood } = require('../services/food.service');

// Function to render the form to add a new food
const renderAddFoodForm = (req, res) => {
    res.render('addFood'); // Assuming you have a view named addFood.jade (or .ejs, .pug, etc.)
};

// Function to handle the form submission to add a new food
const submitNewFood = async (req, res) => {
    let foodData = req.body;
    let response = await addNewFood(foodData);
    res.json(response); // Assuming you handle JSON response for API calls
};

module.exports = { renderAddFoodForm, submitNewFood };
