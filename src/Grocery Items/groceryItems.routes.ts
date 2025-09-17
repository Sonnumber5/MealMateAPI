import * as groceryItemsController from './groceryItems.controller';
import { Router } from 'express';

const router = Router();

router.route('/groceryItems').post(groceryItemsController.createGroceryItem);

router.route('/groceryItems').get(groceryItemsController.readGroceryItems);

router.route('/groceryItems/:groceryItemId').put(groceryItemsController.updateGroceryItem);

router.route('/groceryItems/:groceryItemId').delete(groceryItemsController.deleteGroceryItem);

export default router;