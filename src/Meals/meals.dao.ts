import { OkPacket } from 'mysql';
import { execute } from './../services/mysql.connector';
import { Meal, MealDTO } from './meals.model';
import { mealQueries } from './meals.queries';

export const createMeal = async (meal: Meal, userId: number) => {
    return execute<OkPacket>(mealQueries.createMeal, [meal.name, meal.description, meal.defaultCategoryId, userId]);
};

export const readMeals = async (userId: number) => {
    return execute<MealDTO[]>(mealQueries.readMealsDTO, [userId]);
};

export const readMealsByCategoryId = async (categoryId: number, userId: number) => {
    return execute<MealDTO[]>(mealQueries.readMealsDTOByCategory, [categoryId, userId]);
};

export const readMealById = async (mealId: number, userId: number) => {
    return execute<MealDTO>(mealQueries.readMealDTOById, [mealId, userId]);
};

export const readMealByName = async (mealName: string, userId: number) => {
    return execute<MealDTO>(mealQueries.readMealDTOByName, [mealName, userId]);
};

export const readMealsByNameSearch = async (search: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.readMealsDTOByNameSearch, ['%' + search + '%', userId]);
};

export const readMealsByDescriptionSearch = async (search: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.readMealsDTOByDescriptionSearch, ['%' + search + '%', userId]);
};

export const readMealsByAlphabetAsc = async (userId: number) => {
    return execute<MealDTO[]>(mealQueries.readMealsDTOByAlphabetAsc, [userId]);
};

export const readMealsByAlphabetDesc = async (userId: number) => {
    return execute<MealDTO[]>(mealQueries.readMealsDTOByAlphabetDesc, [userId]);
};

export const readMealsByIngredientSearch = async (ingredient: string, userId: number) => {
    return execute<MealDTO[]>(mealQueries.readMealsDTOByIngredientSearch, ['%' + ingredient + '%', userId]);
};

/* raw/normalized DB read calls
export const readMeals = async (userId: number) => {
    return execute<Meal[]>(mealQueries.readMeals, [userId]);
};

export const readMealsByCategory = async (categoryId: number, userId: number) => {
    return execute<Meal[]>(mealQueries.readMealsByCategory, [categoryId, userId]);
};

export const readMealById = async (mealId: number, userId: number) => {
    return execute<Meal>(mealQueries.readMealById, [mealId, userId]);
};

export const readMealByName = async (mealName: string, userId: number) => {
    return execute<Meal>(mealQueries.readMealByName, [mealName, userId]);
};

export const readMealsByNameSearch = async (search: string, userId: number) => {
    return execute<Meal[]>(mealQueries.readMealsByNameSearch, ['%' + search + '%', userId]);
};

export const readMealsByDescriptionSearch = async (search: string, userId: number) => {
    return execute<Meal[]>(mealQueries.readMealsByDescriptionSearch, ['%' + search + '%', userId]);
};

export const readMealsByAlphabetAsc = async(userId: number) => {
    return execute<Meal[]>(mealQueries.readMealsByAlphabetAsc, [userId]);
};

export const readMealsByAlphabetDec = async(userId: number) => {
    return execute<Meal[]>(mealQueries.readMealsByAlphabetDesc, [userId]);
};

export const readMealsByIngredientSearch = async (ingredient: string, userId: number) => {
    return execute<Meal[]>(mealQueries.readMealsByIngredientSearch, ['%' + ingredient + '%', userId]);
};
*/

export const updateMeal = async (meal: Meal, userId: number) => {
    return execute<OkPacket>(mealQueries.updateMeal, [meal.name, meal.description, meal.defaultCategoryId, meal.mealId, userId]);
};

export const deleteMeal = async (mealId: number, userId: number) => {
    return execute<OkPacket>(mealQueries.deleteMeal, [mealId, userId])
}
