export interface MealPlan {
    mealPlanId: number;
    date: Date;
    mealId: number;
    selectedCategoryId: number;
}

export interface MealPlanDTO {
    mealPlanId: number;
    date: Date;
    mealId: number;
    mealName: string;
    selectedCategoryId: number;
    selectedCategoryName: string;
}
