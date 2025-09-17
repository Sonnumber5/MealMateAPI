export const groceryItemQueries = {
    createGroceryItem: `INSERT INTO grocery_items (name, qty, measurements_id, users_id) VALUES (?, ?, ?, ?);`,
    //readGroceryItems: `SELECT grocery_items.id, grocery_items.name, grocery_items.qty, measurements.measurement FROM grocery_items JOIN measurements ON grocery_items.measurements_id = measurements.id WHERE grocery_items.users_id = ?;`,
    readGroceryItems: `SELECT id, name, qty, measurements_id FROM grocery_items WHERE users_id = ?;`,
    updateGroceryItem: `UPDATE grocery_items SET name = ?, qty = ?, measurements_id = ? WHERE id = ? AND users_id = ?;`,
    deleteGroceryItem: `DELETE FROM grocery_items WHERE id = ? AND users_id = ?;`,
}