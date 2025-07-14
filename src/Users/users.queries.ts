export const userQueries = {
    createUser: `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);`,
    readUser: `SELECT id AS user_id, first_name AS firstName, last_name AS lastName, email AS email, password AS password FROM users WHERE email = ? AND password = ?;`,
    updateUser: `UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;`,
    deleteUser: `DELETE FROM users WHERE id = ?;`
}