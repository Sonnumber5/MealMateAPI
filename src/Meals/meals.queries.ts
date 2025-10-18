export const mealQueries = {
    getAllCategories: `SELECT id AS categoryId, name FROM categories;`,
  
    createMeal: `
      INSERT INTO meals (name, description, default_categories_id, users_id) 
      VALUES (?, ?, ?, ?);
    `,
  
    getAllMealsByUser: `
      SELECT 
        m.id AS mealId,
        m.name AS name,
        m.description AS description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.users_id = ?
      ORDER BY m.name ASC;
    `,
  
    getMealsBySearchParams: `
      SELECT DISTINCT
        m.id AS mealId,
        m.name AS name,
        m.description AS description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      LEFT JOIN meal_ingredients mi ON m.id = mi.meals_id
      LEFT JOIN ingredients i ON mi.ingredients_id = i.id
      WHERE m.users_id = ?
        AND (
          m.name LIKE ? OR m.description LIKE ? OR i.name LIKE ?
        )
      ORDER BY m.name ASC;
    `,
  
    getMealsByCategoryId: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.default_categories_id = ? AND m.users_id = ?;
    `,
  
    getMealsByCategoryName: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE c.name = ? AND m.users_id = ?;
    `,
  
    getMealById: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.id = ? AND m.users_id = ?;
    `,
  
    getMealByName: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.name = ? AND m.users_id = ?;
    `,
  
    getMealsByNameSearch: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.name LIKE ? AND m.users_id = ?;
    `,
  
    getMealsByNameSearchAndCategory: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.default_categories_id = ? AND m.name LIKE ? AND m.users_id = ?;
    `,
  
    getMealsByDescriptionSearch: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.description LIKE ? AND m.users_id = ?;
    `,
  
    getMealsAlphabeticallyAsc: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.users_id = ?
      ORDER BY m.name ASC;
    `,
  
    getMealsAlphabeticallyDesc: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      WHERE m.users_id = ?
      ORDER BY m.name DESC;
    `,
  
    getMealsByIngredientSearch: `
      SELECT 
        m.id AS mealId,
        m.name,
        m.description,
        m.default_categories_id AS defaultCategoryId,
        c.name AS defaultCategoryName
      FROM meals m
      JOIN categories c ON m.default_categories_id = c.id
      JOIN meal_ingredients mi ON mi.meals_id = m.id
      JOIN ingredients i ON mi.ingredients_id = i.id
      WHERE i.name LIKE ? AND m.users_id = ?
      GROUP BY m.id, m.name, m.description, m.default_categories_id, c.name;
    `,
  
    updateMealById: `
      UPDATE meals
      SET name = ?, description = ?, default_categories_id = ?
      WHERE id = ? AND users_id = ?;
    `,
  
    deleteMealById: `
      DELETE FROM meals
      WHERE id = ? AND users_id = ?;
    `
  };
  