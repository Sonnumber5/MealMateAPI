export const mealPlanQueries = {
    createMealPlan: `
      INSERT INTO meal_plans (day, meals_id, meals_users_id)
      VALUES (?, ?, ?);
    `,
  
    getMealPlansByUser: `
      SELECT 
        mp.id AS mealPlanId,
        mp.day AS day,
        mp.meals_id AS mealId
      FROM meal_plans mp
      JOIN meals m ON mp.meals_id = m.id
      WHERE mp.meals_users_id = ?;
    `,
  
    updateMealPlanById: `
      UPDATE meal_plans
      SET day = ?, meals_id = ?
      WHERE id = ? AND meals_users_id = ?;
    `,
  
    deleteMealPlanById: `
      DELETE FROM meal_plans
      WHERE id = ? AND meals_users_id = ?;
    `
  };
  