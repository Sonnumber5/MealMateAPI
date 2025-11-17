import * as groceryItemsController from './groceryItems.controller';
import { Router } from 'express';

const router = Router();

router.route('/groceryItems').post(groceryItemsController.createGroceryItem);

router.route('/groceryItems').get(groceryItemsController.readGroceryItems);

//router.route('/groceryItems/:groceryItemId').put(groceryItemsController.updateGroceryItem);
//test update

router.route('/groceryItems/:groceryItemId').delete(groceryItemsController.deleteGroceryItem);

router.route('/groceryItems/toggleChecked/:groceryItemId').put(groceryItemsController.toggleIsChecked);

export default router;