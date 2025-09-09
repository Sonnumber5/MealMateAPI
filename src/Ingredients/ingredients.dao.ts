import { Ingredient } from "./ingredients.model";
import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { ingredientQueries } from "./ingredients.queries";

export const createIngredient = async (name: string) => {
    return execute<OkPacket>(ingredientQueries.createIngredient, [name])
};

export const readIngredients = async () => {
    return execute<Ingredient[]>(ingredientQueries.readIngredients, []);
};

export const readIngredientByName = async (ingredient: string) => {
    return execute<Ingredient[]>(ingredientQueries.readIngredientByName, [ingredient]);
};

export const readIngredientByNameSearch = async (search: string) => {
    return execute<Ingredient[]>(ingredientQueries.readIngredientByNameSearch, [search]);
};

export const updateIngredient = async (ingredient: Ingredient) => {
    return execute<OkPacket>(ingredientQueries.updateIngredient, [ingredient.name, ingredient.ingredientId]);
};

export const deleteIngredient = async (ingredientId: number) => {
    return execute<OkPacket>(ingredientQueries.deleteIngredient, [ingredientId]);
};

/*
export const createIngredient = async (name: string, userId: number) => {
    return execute<OkPacket>(ingredientQueries.createIngredient, [name, userId])
};

export const readIngredients = async (userId: number) => {
    return execute<Ingredient[]>(ingredientQueries.readIngredients, [userId]);
};

export const readIngredientByName = async (ingredient: string, userId: number) => {
    return execute<Ingredient[]>(ingredientQueries.readIngredientByName, [ingredient, userId]);
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
*/