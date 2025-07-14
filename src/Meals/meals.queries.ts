export const mealQueries = {
    
    createMeal: 
        `INSERT INTO meals (name, description, default_categories_id, users_id) 
        VALUES (?, ?, ?, ?);`,

    readMealsDTO: `
        SELECT meals.id AS mealId, meals.name AS name, meals.description AS description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.users_id = ?;`,

    readMealsDTOByCategory: `
        SELECT meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.default_categories_id = ? AND meals.users_id = ?;`,

    readMealDTOById: `
        SELECT meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.id = ? AND meals.users_id = ?;`,

    readMealDTOByName: `
        SELECT meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.name = ? AND meals.users_id = ?;`,

    readMealsDTOByNameSearch: `
        SELECT meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.name LIKE ? AND meals.users_id = ?;`,

    readMealsDTOByDescriptionSearch: `
        SELECT meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.description LIKE ? AND meals.users_id = ?;`,

    readMealsDTOByAlphabetAsc: `
        SELECT meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.users_id = ?
        ORDER BY meals.name ASC;`,

    readMealsDTOByAlphabetDesc: `
        SELECT  meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        WHERE meals.users_id = ?
        ORDER BY meals.name DESC;`,

    readMealsDTOByIngredientSearch: `
        SELECT meals.id AS mealId, meals.name, meals.description, meals.default_categories_id AS defaultCategoryId, categories.name AS defaultCategoryName
        FROM meals
        JOIN categories ON meals.default_categories_id = categories.id
        JOIN meal_ingredients ON meal_ingredients.meals_id = meals.id
        JOIN ingredients ON meal_ingredients.ingredients_id = ingredients.id
        WHERE ingredients.name LIKE ? AND meals.users_id = ?
        GROUP BY meals.id, meals.name, meals.description, meals.default_categories_id, categories.name;`,

    /* raw/normalized queries
    readMeals: 
        `SELECT id AS mealId, name AS name, description AS description, default_categories_id AS defaultCategoryId 
        FROM meals 
        WHERE users_id = ?`,

    readMealsByCategory:
        `SELECT * FROM meals
        WHERE default_categories_id = ? AND users_id = ?`,

    readMealById: 
        `SELECT id AS mealId, name AS name, description AS description, default_categories_id AS defaultCategoryId
        FROM meals 
        WHERE id = ? AND users_id = ?`,

    readMealByName: 
        `SELECT id AS mealId, name AS name, description AS description, default_categories_id AS defaultCategoryId 
        FROM meals 
        WHERE name = ? AND users_id = ?`,

    readMealsByNameSearch: 
        `SELECT id AS mealId, name AS name, description AS description, default_categories_id AS defaultCategoryId 
        FROM meals 
        WHERE name LIKE ? AND users_id = ?`,

    readMealsByDescriptionSearch: 
        `SELECT id AS mealId, name AS name, description AS description, default_categories_id AS defaultCategoryId 
        FROM meals 
        WHERE AND description LIKE ? AND users_id = ?`,

    readMealsByAlphabetAsc: 
        `SELECT id AS mealId, name AS name, description AS description, default_categories_id AS defaultCategoryId 
        FROM meals 
        WHERE users_id = ? 
        ORDER BY name ASC;`,

    readMealsByAlphabetDesc: 
        `SELECT id AS mealId, name AS name, description AS description, default_categories_id AS defaultCategoryId 
        FROM meals 
        WHERE users_id = ? 
        ORDER BY name DESC;`,
        
    readMealsByIngredientSearch: 
        `SELECT meals.id AS mealId, meals.name AS name, meals.description AS description, meals.default_categories_id AS defaultCategoryId 
        FROM meals 
        JOIN meal_ingredients ON meal_ingredients.meals_id = meals.id 
        JOIN ingredients ON meal_ingredients.ingredients_id = ingredients.id 
        WHERE ingredients.name LIKE ? AND meals.users_id = ? 
        GROUP BY 
        meals.id, 
        meals.name, 
        meals.description, 
        meals.default_categories_id
        `,
        */
    
    updateMeal: 
        `UPDATE meals SET name = ?, description = ?, default_categories_id = ?
        WHERE id = ? AND users_id = ?`,
    
    deleteMeal: 
        `DELETE FROM meals WHERE id = ? AND users_id = ?`,
} 