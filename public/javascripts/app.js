document.addEventListener('DOMContentLoaded', async () => {
    // Populate the restaurant dropdown for food form
    await populateRestaurantDropdown();

    // Add event listener for restaurant form submission
    document.getElementById('restaurantForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const restaurantData = {
            id: document.getElementById('restaurantId').value,
            name: document.getElementById('name').value,
            type: document.getElementById('type').value,
            tags: document.getElementById('tags').value.split(','),
            location: document.getElementById('location').value,
            distance: parseInt(document.getElementById('distance').value, 10),
            time: parseInt(document.getElementById('time').value, 10),
            images: {
                logo: document.getElementById('logo').value,
                poster: document.getElementById('poster').value,
                cover: document.getElementById('cover').value
            },
            categories: document.getElementById('categories').value.split(',')
        };

        try {
            const response = await fetch('/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(restaurantData)
            });

            const result = await response.json();
            document.getElementById('restaurantResponse').innerText = JSON.stringify(result, null, 2);

            // Refresh the restaurant dropdown after adding a new restaurant
            await populateRestaurantDropdown();
        } catch (error) {
            document.getElementById('restaurantResponse').innerText = 'Error: ' + error.message;
        }
    });

    // Add event listener for food form submission
    document.getElementById('foodForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const foodData = {
            id: document.getElementById('foodId').value,
            restaurantId: document.getElementById('restaurantSelect').value,
            name: document.getElementById('foodName').value,
            price: parseInt(document.getElementById('price').value, 10),
            image: document.getElementById('foodImage').value,
            category: document.getElementById('category').value,
            description: document.getElementById('description').value,
            ingredients: document.getElementById('ingredients').value.split(',')
        };

        try {
            const response = await fetch('/foods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(foodData)
            });

            const result = await response.json();
            document.getElementById('foodResponse').innerText = JSON.stringify(result, null, 2);
        } catch (error) {
            document.getElementById('foodResponse').innerText = 'Error: ' + error.message;
        }
    });
});

async function populateRestaurantDropdown() {
    try {
        const response = await fetch('/restaurants');
        const result = await response.json();

        if (result.status) {
            const restaurantSelect = document.getElementById('restaurantSelect');
            restaurantSelect.innerHTML = '';

            result.data.forEach(restaurant => {
                const option = document.createElement('option');
                option.value = restaurant.id;
                option.textContent = restaurant.name;
                restaurantSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
}
