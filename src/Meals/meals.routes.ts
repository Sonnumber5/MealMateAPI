import * as mealsController from './meals.controller';
import { Router } from 'express';

const router = Router();

router.route('/meals').post(mealsController.createMeal);

router.route('/meals').get(mealsController.readMeals);

router.route('/meals/:mealId').get(mealsController.readMealById);

router.route('/meals/category/:categoryId').get(mealsController.readMealsByCategoryId);

router.route('/meals/search/ingredients/:search').get(mealsController.readMealsByIngredientSearch);

router.route('/meals/search/descriprion/:search').get(mealsController.readMealsByDescriptionSearch);

router.route('/meals/filters/asc').get(mealsController.readMealsByAlphabetAsc);

router.route('/meals/filters/desc').get(mealsController.readMealsByAlphabetDesc);

router.route('/meals/name/:mealName').get(mealsController.readMealByName);

router.route('/meals/search/name/:search').get(mealsController.readMealsByNameSearch);

router.route('/meals').put(mealsController.updateMeal);

router.route('/meals/:mealId').delete(mealsController.deleteMeal);

export default router;