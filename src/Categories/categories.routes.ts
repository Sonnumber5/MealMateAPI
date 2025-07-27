import { Router } from "express";
import * as categoriesController from './categories.controller';

const router = Router();

router.route('/categories').get(categoriesController.readCategories);

export default router;