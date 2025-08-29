export const mealPlanQueries = {
    createMealPlan: `
        INSERT INTO meal_plans (day, meals_id, meals_users_id)
        VALUES (?, ?, ?);`,

    readMealPlansDTO: `
        SELECT meal_plans.id AS mealPlanId, meal_plans.day AS day, meal_plans.meals_id AS mealId
        FROM meal_plans
        JOIN meals ON meal_plans.meals_id = meals.id
        WHERE meal_plans.meals_users_id = ?;`,

    updateMealPlan: `
        UPDATE meal_plans
        SET day = ?, meals_id = ?
        WHERE id = ? AND meals_users_id = ?;`,

    deleteMealPlan: `
        DELETE FROM meal_plans
        WHERE id = ? AND meals_users_id = ?;`,
}
