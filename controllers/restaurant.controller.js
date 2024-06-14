const { addNewRestaurant } = require('../services/restaurant.service');

// Function to render the form to add a new restaurant
const renderAddRestaurantForm = (req, res) => {
    res.render('addRestaurant'); // Assuming you have a view named addRestaurant.jade (or .ejs, .pug, etc.)
};

// Function to handle the form submission to add a new restaurant
const submitNewRestaurant = async (req, res) => {
    let restaurantData = req.body;
    let response = await addNewRestaurant(restaurantData);
    res.json(response); // Assuming you handle JSON response for API calls
};

module.exports = { renderAddRestaurantForm, submitNewRestaurant };