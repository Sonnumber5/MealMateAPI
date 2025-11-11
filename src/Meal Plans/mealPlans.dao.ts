import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { MealPlan, MealPlanDTO} from "./mealPlans.model";
import { mealPlanQueries } from "./mealPlans.queries";

export const createMealPlan = async (day: String, mealId: String, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.createMealPlan, [day, mealId, userId]);
};

export const readMealPlans = async (userId: number) => {
    return execute<MealPlanDTO[]>(mealPlanQueries.getMealPlansByUser, [userId]);
};

export const readMealPlanById = async (mealPlanId: number, userId: number) => {
    return execute<MealPlanDTO[]>(mealPlanQueries.getMealPlansByUser, [mealPlanId, userId]);
};

export const updateMealPlan = async (mealPlan: MealPlan, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.updateMealPlanById, [mealPlan.day, mealPlan.mealId, mealPlan.mealPlanId, userId]);
};

export const deleteMealPlan = async (mealPlanId: number, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.deleteMealPlanById, [mealPlanId, userId])
}