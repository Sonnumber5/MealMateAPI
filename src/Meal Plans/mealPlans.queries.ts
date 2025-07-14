export const mealPlanQueries = {
    createMealPlan: `
        INSERT INTO meal_plans (date, meals_id, selected_categories_id, meals_users_id)
        VALUES (?, ?, ?, ?);`,

    readMealPlansDTO: `
        SELECT meal_plans.id AS mealPlanId, meal_plans.date AS date, meal_plans.meals_id AS mealId, meals.name AS mealName, meal_plans.selected_categories_id AS selectedCategoryId, categories.name AS selectedCategoryName
        FROM meal_plans
        JOIN meals ON meal_plans.meals_id = meals.id
        JOIN categories ON meal_plans.selected_categories_id = categories.id
        WHERE meal_plans.meals_users_id = ?;`,

    readMealPlansDTOByDate: `
        SELECT meal_plans.id AS mealPlanId, meal_plans.date AS date, meal_plans.meals_id AS mealId, meals.name AS mealName, meal_plans.selected_categories_id AS selectedCategoryId, categories.name AS selectedCategoryName
        FROM meal_plans
        JOIN meals ON meal_plans.meals_id = meals.id
        JOIN categories ON meal_plans.selected_categories_id = categories.id
        WHERE meal_plans.date = ? AND meal_plans.meals_users_id = ?;`,

    /* raw/normalized queries
    readMealPlans: `
        SELECT id AS mealPlanId, date, meals_id AS mealId, selected_categories_id AS selectedCategoryId
        FROM meal_plans
        WHERE meals_users_id = ?;`,
        
    readMealPlansByDate: `
        SELECT id AS mealPlanId, date, meals_id AS mealId, selected_categories_id AS selectedCategoryId
        FROM meal_plans
        WHERE date = ? AND meals_users_id = ?;`,
    */

    updateMealPlan: `
        UPDATE meal_plans
        SET date = ?, meals_id = ?, selected_categories_id = ?
        WHERE id = ? AND meals_users_id = ?;`,

    deleteMealPlan: `
        DELETE FROM meal_plans
        WHERE id = ? AND meals_users_id = ?;`,
}
