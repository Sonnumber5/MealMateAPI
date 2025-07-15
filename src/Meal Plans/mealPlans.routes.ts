import * as mealPlansController from './mealPlans.controller';
import { Router } from 'express';

const router = Router();

router.route('/mealPlans').post(mealPlansController.createMealPlan);

router.route('/mealPlans').get(mealPlansController.readMealPlans);

router.route('/mealPlans/date/:date').get(mealPlansController.readMealPlansByDate);

router.route('/mealPlans').put(mealPlansController.updateMealPlan);

router.route('/mealPlans/:mealPlanId').delete(mealPlansController.deleteMealPlan);

export default router;