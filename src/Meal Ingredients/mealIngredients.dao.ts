import { MealIngredient, MealIngredientDTO } from "./mealIngredients.model";
import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { mealIngredientQueries } from "./mealIngredients.queries";


export const createMealIngredient = async (mealIngredient: MealIngredient) => {
    return execute<OkPacket>(mealIngredientQueries.createMealIngredient, [mealIngredient.mealId, mealIngredient.ingredientId, mealIngredient.qty, mealIngredient.measurementId]);
};

export const readMealIngredientsByMealId = async (mealId: number) => {
    return execute<MealIngredientDTO[]>(mealIngredientQueries.readMealIngredientsDTOByMealId, [mealId]);
};

/* raw/normalized DB read calls
export const readMealIngredientsByMealId = async (mealId: number) => {
    return execute<MealIngredient[]>(mealIngredientQueries.readMealIngredientsByMealId, [mealId]);
};
*/

export const updateMealIngredient = async (mealIngredient: MealIngredient) => {
    return execute<OkPacket>(mealIngredientQueries.updateMealIngredient, [mealIngredient.qty, mealIngredient.measurementId, mealIngredient.mealId, mealIngredient.ingredientId]);
};

export const deleteMealIngredient = async (mealId: number, ingredientId: number) => {
    return execute<OkPacket>(mealIngredientQueries.deleteMealIngredient, [mealId, ingredientId]);
};