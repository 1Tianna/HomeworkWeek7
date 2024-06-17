const foodItems = [
    { name: 'Turkey Burger', calories: 52, fat: 0.2, protein: 0.3 },
    { name: 'Steak', calories: 89, fat: 0.3, protein: 1.1 },
    { name: 'Chicken Breast', calories: 165, fat: 3.6, protein: 31 },
    { name: 'Salmon', calories: 208, fat: 13.4, protein: 20.4 },
    { name: 'Asparagus', calories: 579, fat: 49.9, protein: 21.2 },
    { name: 'Brussel Sprouts', calories: 59, fat: 3.3, protein: 3.6 },
    { name: 'Salad', calories: 52, fat: 0.2, protein: 0.3 },
    { name: 'Green Beans', calories: 89, fat: 0.3, protein: 1.1 },
    { name: 'Quinoa', calories: 165, fat: 3.6, protein: 31 },
    { name: 'Brown Rice', calories: 208, fat: 13.4, protein: 20.4 },
    { name: 'Oats', calories: 579, fat: 49.9, protein: 21.2 },
    { name: 'Whole Grain Pasta', calories: 59, fat: 3.3, protein: 3.6 },
    { name: 'Apple', calories: 59, fat: 3.3, protein: 3.6 },
    { name: 'Banana', calories: 52, fat: 0.2, protein: 0.3 },
    { name: 'Avocado', calories: 89, fat: 0.3, protein: 1.1 },
    { name: 'Blueberries', calories: 165, fat: 3.6, protein: 31 },
    { name: 'Greek Yogurt', calories: 208, fat: 13.4, protein: 20.4 },
    { name: 'Soy Milk', calories: 579, fat: 49.9, protein: 21.2 },
    { name: 'Cottage Cheese', calories: 59, fat: 3.3, protein: 3.6 }
];

function displayFoodItems(items) {
    const foodList = document.getElementById('foodList');
    foodList.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('food-item');
        li.innerHTML = `
            <span>${item.name}</span> - 
            Calories: ${item.calories}, 
            Fat: ${item.fat}g, 
            Protein: ${item.protein}g
        `;
        foodList.appendChild(li);
    });
}

function filterFoodItems() {
    const maxCalories = parseInt(document.getElementById('calories').value) || 1000;
    const maxFat = parseFloat(document.getElementById('fat').value) || 1000;
    const minProtein = parseFloat(document.getElementById('protein').value) || 0;

    const filteredItems = foodItems.filter(item =>
        item.calories <= maxCalories &&
        item.fat <= maxFat &&
        item.protein >= minProtein
    );

    displayFoodItems(filteredItems);
}

function resetFilters() {
    document.getElementById('calories').value = '';
    document.getElementById('fat').value = '';
    document.getElementById('protein').value = '';
    displayFoodItems(foodItems);
}

document.getElementById('filterButton').addEventListener('click', filterFoodItems);
document.getElementById('resetButton').addEventListener('click', resetFilters);

displayFoodItems(foodItems);
