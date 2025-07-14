import { Router } from "express";
import * as mealIngredientController from './mealIngredients.controller';

const router = Router();

router.route('/mealIngredients').post(mealIngredientController.createMealIngredient);

router.route('/mealIngredients/:mealId/').get(mealIngredientController.readMealIngredientsByMealId);

router.route('/mealIngredients/:mealId/:ingredientId').put(mealIngredientController.updateMealIngredient);

router.route('/mealIngredients/:mealId/:ingredientId').delete(mealIngredientController.deleteMealIngredient);

export default router;