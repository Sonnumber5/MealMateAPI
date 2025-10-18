export const groceryItemQueries = {
  createGroceryItem: `INSERT INTO grocery_items (name, qty, measurements_id, isChecked, users_id) VALUES (?, ?, ?, ?, ?);`,
  getAllGroceryItemsByUser: `SELECT g.id, g.name, g.qty, m.measurement, g.isChecked 
                             FROM grocery_items g 
                             JOIN measurements m ON m.id = g.measurements_id 
                             WHERE g.users_id = ?;`,
  updateGroceryItemById: `UPDATE grocery_items 
                          SET name = ?, qty = ?, measurements_id = ?, isChecked = ? 
                          WHERE id = ? AND users_id = ?;`,
  deleteGroceryItemById: `DELETE FROM grocery_items WHERE id = ? AND users_id = ?;`,
  setGroceryItemCheckedById: `UPDATE grocery_items SET isChecked = ? WHERE id = ? AND users_id = ?;`
};
