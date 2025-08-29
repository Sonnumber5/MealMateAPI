import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { MealPlan, MealPlanDTO} from "./mealPlans.model";
import { mealPlanQueries } from "./mealPlans.queries";

export const createMealPlan = async (mealPlan: MealPlan, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.createMealPlan, [mealPlan.day, mealPlan.mealId, userId]);
};

export const readMealPlans = async (userId: number) => {
    return execute<MealPlanDTO[]>(mealPlanQueries.readMealPlansDTO, [userId]);
};

export const updateMealPlan = async (mealPlan: MealPlan, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.updateMealPlan, [mealPlan.day, mealPlan.mealId, mealPlan.mealPlanId, userId]);
};

export const deleteMealPlan = async (mealPlanId: number, userId: number) => {
    return execute<OkPacket>(mealPlanQueries.deleteMealPlan, [mealPlanId, userId])
}