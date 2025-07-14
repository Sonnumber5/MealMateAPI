import { MealIngredientDTO } from './../Meal Ingredients/mealIngredients.model';

export interface Meal{
    mealId: number,
    name: string,
    description: string,
    defaultCategoryId: number,
};

export interface MealDTO {
    mealId: number;
    name: string;
    description: string;
    defaultCategoryId: number;
    defaultCategoryName: string; 
    mealIngredients: MealIngredientDTO[]; 
  }