export interface MealIngredient{
    mealId: number,
    ingredientId: number,
    qty: number,
    measurementId: number
};

export interface MealIngredientDTO {
    mealId: number,
    ingredientId: number,
    ingredient: string,
    qty: number,
    measurementId: number,
    measurement: string
};
  