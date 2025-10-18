import { OkPacket } from 'mysql';
import { execute } from './../services/mysql.connector';
import { Meal, MealDTO } from './meals.model';
import { mealQueries } from './meals.queries';

export const createMeal = async (meal: Meal, userId: number) => {
    return execute<OkPacket>(mealQueries.createMeal, [meal.name, meal.description, meal.defaultCategoryId, userId]);
};

export const readMeals = async (userId: number) => {
    return execute<MealDTO[]>(mealQueries.getAllMealsByUser, [userId]);
};

export const readMealsBySearchParams = async (userId: number, searchParam: string) => {
    return execute<MealDTO[]>(mealQueries.getMealsBySearchParams, [userId, '%' + searchParam + '%', '%' + searchParam + '%', '%' + searchParam + '%']);
};

export const readMealsByCategory = async (category: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsByCategoryName, [category, userId]);
};

export const readMealsByCategoryId = async (categoryId: number, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsByCategoryName, [categoryId, userId]);
};

export const readMealById = async (mealId: number, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealById, [mealId, userId]);
};

export const readMealByName = async (mealName: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealByName, [mealName, userId]);
};

export const readMealsByNameSearchAndCategory = async (categoryId: number, search: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsByNameSearchAndCategory, [categoryId, '%' + search + '%', userId]);
};

export const readMealsByNameSearch = async (search: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsByNameSearch, ['%' + search + '%', userId]);
};

export const readMealsByDescriptionSearch = async (search: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsByDescriptionSearch, ['%' + search + '%', userId]);
};

export const readMealsByAlphabetAsc = async (userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsAlphabeticallyAsc, [userId]);
};

export const readMealsByAlphabetDesc = async (userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsAlphabeticallyDesc, [userId]);
};

export const readMealsByIngredientSearch = async (ingredient: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.getMealsByIngredientSearch, ['%' + ingredient + '%', userId]);
};

export const updateMeal = async (meal: Meal, userId: number) => {
    return execute<OkPacket>(mealQueries.updateMealById, [meal.name, meal.description, meal.defaultCategoryId, meal.mealId, userId]);
};

export const deleteMeal = async (mealId: number, userId: number) => {
    return execute<OkPacket>(mealQueries.deleteMealById, [mealId, userId])
}
