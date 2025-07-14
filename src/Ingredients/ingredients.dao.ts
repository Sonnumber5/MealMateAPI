import { Ingredient } from "./ingredients.model";
import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { ingredientQueries } from "./ingredients.queries";

export const createIngredient = async (ingredient: Ingredient, userId: number) => {
    return execute<OkPacket>(ingredientQueries.createIngredient, [ingredient.name, userId])
};

export const readIngredients = async (userId: number) => {
    return execute<Ingredient[]>(ingredientQueries.readIngredients, [userId]);
};

export const readIngredientByName = async (ingredient: string, userId: number) => {
    return execute<Ingredient>(ingredientQueries.readIngredientByName, [ingredient, userId]);
};

export const readIngredientByNameSearch = async (search: string, userId: number) => {
    return execute<Ingredient[]>(ingredientQueries.readIngredientByNameSearch, [search, userId]);
};

export const updateIngredient = async (ingredient: Ingredient, userId: number) => {
    return execute<OkPacket>(ingredientQueries.updateIngredient, [ingredient.name, ingredient.ingredientId, userId]);
};

export const deleteIngredient = async (ingredientId: number, userId: number) => {
    return execute<OkPacket>(ingredientQueries.deleteIngredient, [ingredientId, userId]);
};

