export const groceryItemQueries = {
    createGroceryItem: `INSERT INTO grocery_items (name, qty, measurements_id, isChecked, users_id) VALUES (?, ?, ?, ?, ?);`,
    //readGroceryItems: `SELECT grocery_items.id, grocery_items.name, grocery_items.qty, measurements.measurement FROM grocery_items JOIN measurements ON grocery_items.measurements_id = measurements.id WHERE grocery_items.users_id = ?;`,
    readGroceryItems: `SELECT g.id, g.name, g.qty, m.measurement, g.isChecked FROM grocery_items g JOIN measurements m ON m.id = g.measurements_id WHERE users_id = ?;`,
    updateGroceryItem: `UPDATE grocery_items SET name = ?, qty = ?, measurements_id = ? isChecked = ? WHERE id = ? AND users_id = ?;`,
    deleteGroceryItem: `DELETE FROM grocery_items WHERE id = ? AND users_id = ?;`,
    toggleItemChecked: `UPDATE grocery_items SET isChecked = ? WHERE id = ? AND users_id = ?;`
}