import { Ingredient } from "./ingredients.model";
import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { ingredientQueries } from "./ingredients.queries";

export const createIngredient = async (name: string) => {
    return execute<OkPacket>(ingredientQueries.createIngredient, [name])
};

export const readIngredients = async () => {
    return execute<Ingredient[]>(ingredientQueries.getAllIngredients , []);
};

export const readIngredientByName = async (ingredient: string) => {
    return execute<Ingredient[]>(ingredientQueries.getIngredientByName, [ingredient]);
};

export const readIngredientByNameSearch = async (search: string) => {
    return execute<Ingredient[]>(ingredientQueries.searchIngredientsByName, [search]);
};

export const updateIngredient = async (ingredient: Ingredient) => {
    return execute<OkPacket>(ingredientQueries.updateIngredientById, [ingredient.name, ingredient.ingredientId]);
};

export const deleteIngredient = async (ingredientId: number) => {
    return execute<OkPacket>(ingredientQueries.deleteIngredientById, [ingredientId]);
};