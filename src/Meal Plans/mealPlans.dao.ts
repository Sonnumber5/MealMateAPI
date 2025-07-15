import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { MealPlan, MealPlanDTO} from "./mealPlans.model";
import { mealPlanQueries } from "./mealPlans.queries";

export const createMealPlan = async (mealPlan: MealPlan, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.createMealPlan, [mealPlan.date, mealPlan.mealId, mealPlan.selectedCategoryId, userId]);
};

export const readMealPlans = async (userId: number) => {
    return execute<MealPlanDTO[]>(mealPlanQueries.readMealPlansDTO, [userId]);
};

export const readMealPlansByDate = async (date: string, userId: number) => {
    return execute<MealPlanDTO[]>(mealPlanQueries.readMealPlansDTOByDate, [date, userId]);
};

/* raw/normalized DB read calls
export const readMealPlans = async (userId: number) => {
    return execute<MealPlan[]>(mealPlanQueries.readMealPlans, [userId]);
};

export const readMealPlansByDate = async (date: Date, userId: number) => {
    return execute<MealPlan[]>(mealPlanQueries.readMealPlansByDate, [date, userId]);
};
*/

export const updateMealPlan = async (mealPlan: MealPlan, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.updateMealPlan, [mealPlan.date, mealPlan.mealId, mealPlan.selectedCategoryId, mealPlan.mealPlanId, userId]);
};

export const deleteMealPlan = async (mealPlanId: number, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.deleteMealPlan, [mealPlanId, userId])
}