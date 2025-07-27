export const mealIngredientQueries = {
    createMealIngredient: `
        INSERT INTO meal_ingredients (meals_id, ingredients_id, qty, measurements_id) 
        VALUES (?, ?, ?, ?)`,

        readMealIngredientsDTO: `
        SELECT meal_ingredients.meals_id AS mealId, meal_ingredients.ingredients_id AS ingredientId, ingredients.name AS ingredient, meal_ingredients.qty AS qty, meal_ingredients.measurements_id AS measurementId, measurements.measurement AS measurement
        FROM meal_ingredients
        JOIN ingredients ON meal_ingredients.ingredients_id = ingredients.id
        LEFT JOIN measurements ON meal_ingredients.measurements_id = measurements.id
        WHERE ingredients.users_id = ?`,
        
        readMeasurements: `SELECT id AS measurementId, measurement FROM measurements`,
    
    readMealIngredientsDTOByMealId: `
        SELECT meal_ingredients.meals_id AS mealId, meal_ingredients.ingredients_id AS ingredientId, ingredients.name AS ingredient, meal_ingredients.qty AS qty, meal_ingredients.measurements_id AS measurementId, measurements.measurement AS measurement
        FROM meal_ingredients
        JOIN ingredients ON meal_ingredients.ingredients_id = ingredients.id
        JOIN measurements ON meal_ingredients.measurements_id = measurements.id
        WHERE meal_ingredients.meals_id = ?`,

    readMealIngredientDTOByMealAndIngredientId: `
        SELECT meal_ingredients.meals_id AS mealId, meal_ingredients.ingredients_id AS ingredientId, ingredients.name AS ingredient, meal_ingredients.qty AS qty, meal_ingredients.measurements_id AS measurementId, measurements.measurement AS measurement
        FROM meal_ingredients
        JOIN ingredients ON meal_ingredients.ingredients_id = ingredients.id
        JOIN measurements ON meal_ingredients.measurements_id = measurements.id
        WHERE meal_ingredients.meals_id = ? AND meal_ingredients.ingredients_id = ? AND users_id = ?`,
    
    /* raw/normalized queries
    readMealIngredientsByMealId: `
        SELECT meals_id AS mealId, meal_ingredients.ingredients_id AS ingredientId, meal_ingredients.qty AS qty, measurement_id AS measurementId
        FROM meal_ingredients 
        WHERE meals_id = ?`,
     */

    updateMealIngredient: `
        UPDATE meal_ingredients
        SET ingredients_id = ?, qty = ?, measurements_id = ?
        WHERE meals_id = ? AND ingredients_id = ?`,

    deleteMealIngredient: `
        DELETE FROM meal_ingredients 
        WHERE meals_id = ? AND ingredients_id = ?`,
};
