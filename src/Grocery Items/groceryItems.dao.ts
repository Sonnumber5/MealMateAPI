import { GroceryItem } from "./groceryItems.model";
import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { groceryItemQueries } from "./groceryItems.queries";

export const createGroceryItem = async (groceryItem: GroceryItem, userId: number) => {
    return execute<OkPacket>(groceryItemQueries.createGroceryItem, [groceryItem.name, groceryItem.qty, groceryItem.measurements_id, groceryItem.isChecked, userId]);
}

export const readGroceryItems = async (userId: number) => {
    return execute<GroceryItem[]>(groceryItemQueries.getAllGroceryItemsByUser, [userId]);
}

export const readGroceryItemById = async (groceryItemId: number, userId: number) => {
    return execute<GroceryItem[]>(groceryItemQueries.getGroceryItemById, [groceryItemId, userId]);
}

export const updateGroceryItem = async (groceryItem: GroceryItem, groceryItemId: number, userId: number) => {
    return execute<OkPacket>(groceryItemQueries.updateGroceryItemById, [groceryItem.name, groceryItem.qty, groceryItem.measurements_id, groceryItem.isChecked, groceryItemId, userId]);
}

export const deleteGroceryItem = async (groceryItemId: number, userId: number) => {
    return execute<OkPacket>(groceryItemQueries.deleteGroceryItemById, [groceryItemId, userId]);
}

export const toggleIsChecked = async (isChecked: boolean, groceryItemId: number, userId: number) => {
    return execute<OkPacket>(groceryItemQueries.setGroceryItemCheckedById, [isChecked, groceryItemId, userId]);
}