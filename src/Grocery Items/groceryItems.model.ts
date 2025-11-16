export interface GroceryItem{
    groceryItemId: number;
    name: string,
    mealId?: number,
    mealName?: string,
    qty: number,
    measurements_id: number,
    isChecked: boolean,
}