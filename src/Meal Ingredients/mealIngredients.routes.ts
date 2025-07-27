import { Router } from "express";
import * as mealIngredientController from './mealIngredients.controller';

const router = Router();

router.route('/mealIngredients').post(mealIngredientController.createMealIngredient);

router.route('/mealIngredients').get(mealIngredientController.readMealIngredientsDTO);

router.route('/mealIngredients/:mealId/:ingredientId').get(mealIngredientController.readMealIngredientDTOByMealAndIngredientId);

router.route('/mealIngredients/:mealId').get(mealIngredientController.readMealIngredientsByMealId);

router.route('/mealIngredients/:originalIngredientId/:mealId/:ingredientId').put(mealIngredientController.updateMealIngredient);

router.route('/mealIngredients/:mealId/:ingredientId').delete(mealIngredientController.deleteMealIngredient);

router.route('/measurements').get(mealIngredientController.readMeasurements);

export default router;