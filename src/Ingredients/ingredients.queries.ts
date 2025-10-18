export const ingredientQueries = {
    createIngredient: `INSERT INTO ingredients (name) VALUES (?);`,
    getAllIngredients: `SELECT id AS ingredientId, name AS name FROM ingredients;`,
    getIngredientByName: `SELECT id AS ingredientId, name AS name FROM ingredients WHERE name = ?;`,
    searchIngredientsByName: `SELECT id AS ingredientId, name AS name FROM ingredients WHERE name LIKE ?;`,
    getIngredientNameById: `SELECT name AS name FROM ingredients WHERE id = ?;`,
    updateIngredientById: `UPDATE ingredients SET name = ? WHERE id = ?;`,
    deleteIngredientById: `DELETE FROM ingredients WHERE id = ?;`
  };
  