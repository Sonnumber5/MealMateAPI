export const ingredientQueries = {
    createIngredient: `INSERT INTO ingredients (name, users_id) VALUES (?, ?);`,
    readIngredients: `SELECT id AS ingredientId, name AS name FROM ingredients WHERE users_id = ?;`,
    readIngredientByName: `SELECT id AS ingredientId, name AS name FROM ingredients WHERE name = ? AND users_id = ?;`,
    readIngredientByNameSearch: `SELECT id AS ingredientId, name AS name FROM ingredients WHERE name LIKE ? AND users_id = ?;`,
    readIngredientNameById: `SELECT name AS name FROM ingredients WHERE id = ? AND users_id = ?`,
    updateIngredient: `UPDATE ingredients SET name = ? WHERE id = ? AND users_id = ?;`,
    deleteIngredient: `DELETE from ingredients WHERE id = ? AND users_id = ?`
}