export const groceryItemQueries = {
  createGroceryItem: `INSERT INTO grocery_items (name, meals_id, qty, measurements_id, isChecked, users_id) VALUES (?, ?, ?, ?, ?, ?);`,
  getAllGroceryItemsByUser: `SELECT g.id, g.name, meal.id as mealId, meal.name as mealName, g.qty, m.measurement, g.isChecked
  FROM grocery_items g 
  LEFT JOIN measurements m ON m.id = g.measurements_id 
  LEFT JOIN meals meal ON meal.id = g.meals_id
  WHERE g.users_id = ?;`,
  getGroceryItemById: `SELECT g.id, g.name, meal.id as mealId, meal.name as mealName, g.qty, m.measurement, g.isChecked
  FROM grocery_items g 
  LEFT JOIN measurements m ON m.id = g.measurements_id 
  LEFT JOIN meals meal ON meal.id = g.meals_id
  WHERE g.id = ? AND g.users_id = ?;`,
  //updateGroceryItemById: `UPDATE grocery_items SET name = ?, qty = ?, measurements_id = ?, isChecked = ? WHERE id = ? AND users_id = ?;`,
  deleteGroceryItemById: `DELETE FROM grocery_items WHERE id = ? AND users_id = ?;`,
  setGroceryItemCheckedById: `UPDATE grocery_items SET isChecked = ? WHERE id = ? AND users_id = ?;`
};
