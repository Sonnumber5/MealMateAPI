import { MealIngredient, MealIngredientDTO } from "./mealIngredients.model";
import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { mealIngredientQueries } from "./mealIngredients.queries";
import { Measurement } from "./measurements.model";


export const createMealIngredient = async (mealIngredient: MealIngredient) => {
    return execute<OkPacket>(mealIngredientQueries.createMealIngredient, [mealIngredient.mealId, mealIngredient.ingredientId, mealIngredient.qty, mealIngredient.measurementId]);
};

export const readMealIngredients = async (userId: number) => {
    return execute<MealIngredientDTO[]>(mealIngredientQueries.readMealIngredientsDTO, [userId]);
}

export const readMealIngredientDTOByMealAndIngredientId = async (mealId: number, ingredientId: number, userId: number) => {
    return execute<MealIngredientDTO[]>(mealIngredientQueries.readMealIngredientDTOByMealAndIngredientId, [mealId, ingredientId, userId]);
}

export const readMeasurements = async () => {
    return execute <Measurement[]>(mealIngredientQueries.readMeasurements, []);
}

export const readMealIngredientsByMealId = async (mealId: number) => {
    return execute<MealIngredientDTO[]>(mealIngredientQueries.readMealIngredientsDTOByMealId, [mealId]);
};

/* raw/normalized DB read calls
export const readMealIngredientsByMealId = async (mealId: number) => {
    return execute<MealIngredient[]>(mealIngredientQueries.readMealIngredientsByMealId, [mealId]);
};
*/

export const updateMealIngredient = async (originalIngredientId: number, mealIngredient: MealIngredient) => {
    return execute<OkPacket>(mealIngredientQueries.updateMealIngredient, [mealIngredient.ingredientId, mealIngredient.qty, mealIngredient.measurementId, mealIngredient.mealId, originalIngredientId]);
};

export const deleteMealIngredient = async (mealId: number, ingredientId: number) => {
    return execute<OkPacket>(mealIngredientQueries.deleteMealIngredient, [mealId, ingredientId]);
};