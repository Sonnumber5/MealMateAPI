import { GroceryItem } from "./groceryItems.model";
import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { groceryItemQueries } from "./groceryItems.queries";

export const createGroceryItem = async (groceryItem: GroceryItem, userId: number) => {
    return execute<OkPacket>(groceryItemQueries.createGroceryItem, [groceryItem.name, groceryItem.qty, groceryItem.measurements_id, userId]);
}

export const readGroceryItems = async (userId: number) => {
    return execute<GroceryItem[]>(groceryItemQueries.readGroceryItems, [userId]);
}

export const updateGroceryItem = async (groceryItem: GroceryItem, groceryItemId: number, userId: number) => {
    return execute<OkPacket>(groceryItemQueries.updateGroceryItem, [groceryItem.name, groceryItem.qty, groceryItem.measurements_id, groceryItemId, userId]);
}

export const deleteGroceryItem = async (groceryItemId: number, userId: number) => {
    return execute<OkPacket>(groceryItemQueries.deleteGroceryItem, [groceryItemId, userId]);
}