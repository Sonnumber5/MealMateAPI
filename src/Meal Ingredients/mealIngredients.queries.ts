export const mealIngredientQueries = {
    createMealIngredient: `
      INSERT INTO meal_ingredients (meals_id, ingredients_id, qty, measurements_id) 
      VALUES (?, ?, ?, ?);
    `,
  
    getMealIngredientsByUser: `
      SELECT 
        mi.meals_id AS mealId,
        mi.ingredients_id AS ingredientId,
        i.name AS ingredient,
        mi.qty AS qty,
        mi.measurements_id AS measurementId,
        m.measurement AS measurement
      FROM meal_ingredients mi
      JOIN ingredients i ON mi.ingredients_id = i.id
      LEFT JOIN measurements m ON mi.measurements_id = m.id
      WHERE i.users_id = ?;
    `,
  
    getMealIngredientsByMealId: `
      SELECT 
        mi.meals_id AS mealId,
        mi.ingredients_id AS ingredientId,
        i.name AS ingredient,
        mi.qty AS qty,
        mi.measurements_id AS measurementId,
        m.measurement AS measurement
      FROM meal_ingredients mi
      JOIN ingredients i ON mi.ingredients_id = i.id
      JOIN measurements m ON mi.measurements_id = m.id
      WHERE mi.meals_id = ?;
    `,
  
    getMealIngredientByMealAndIngredientId: `
      SELECT 
        mi.meals_id AS mealId,
        mi.ingredients_id AS ingredientId,
        i.name AS ingredient,
        mi.qty AS qty,
        mi.measurements_id AS measurementId,
        m.measurement AS measurement
      FROM meal_ingredients mi
      JOIN ingredients i ON mi.ingredients_id = i.id
      JOIN measurements m ON mi.measurements_id = m.id
      WHERE mi.meals_id = ? AND mi.ingredients_id = ? AND users_id = ?;
    `,
  
    getAllMeasurements: `SELECT id AS measurementId, measurement FROM measurements;`,
  
    updateMealIngredientByIds: `
      UPDATE meal_ingredients
      SET ingredients_id = ?, qty = ?, measurements_id = ?
      WHERE meals_id = ? AND ingredients_id = ?;
    `,
  
    deleteMealIngredientByIds: `
      DELETE FROM meal_ingredients 
      WHERE meals_id = ? AND ingredients_id = ?;
    `
  };
  