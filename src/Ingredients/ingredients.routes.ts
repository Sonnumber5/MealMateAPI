import { Router } from "express";
import * as IngredientsController from './ingredients.controller';

const router = Router();

router.route('/ingredients').post(IngredientsController.createIngredient);

router.route('/ingredients').get(IngredientsController.readIngredients);

router.route('/ingredients/name/:ingredient').get(IngredientsController.readIngredientByName);

router.route('/ingredients/search/name/:search').get(IngredientsController.readIngredientByNameSearch);

router.route('/ingredients').put(IngredientsController.updateIngredient);

router.route('/ingredients/:ingredientId').delete(IngredientsController.deleteIngredient);



/*
import { Router } from 'express';
import * as AlbumsController from './albums.controller';

const router = Router();

router.route('/albums').get(AlbumsController.readAlbums);

router.route('/albums/:albumId').get(AlbumsController.readAlbums);

router.route('/albums/:artist').get(AlbumsController.readAlbumsByArtist);

router.route('/albums/search/artist/:search').get(AlbumsController.readAlbumsByArtistSearch);

router.route('/albums/search/description/:search').get(AlbumsController.readAlbumsByDescriptionSearch);

router.route('/albums').post(AlbumsController.createAlbum);

router.route('/albums/').put(AlbumsController.updateAlbum);

router.route('/albums/:albumId').delete(AlbumsController.deleteAlbum);

export default router;
*/
export default router;