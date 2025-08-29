import { MealDTO } from "../Meals/meals.model";

export interface MealPlan {
    mealPlanId: number;
    day: string;
    mealId: number;
}

export interface MealPlanDTO {
    mealPlanId: number;
    day: string;
    mealId: number;
    meal: MealDTO; 
}
