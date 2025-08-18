import { Request, RequestHandler, Response } from 'express';
import { Ingredient } from './ingredients.model';
import { OkPacket } from 'mysql';
import * as ingredientsDAO from './ingredients.dao';


export const createIngredient: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        const okPacket: OkPacket = await ingredientsDAO.createIngredient(req.body.name, userId);
        
        console.log('req.body', req.body);
        console.log('ingredient', okPacket);

        res.status(201).json(okPacket);

    } catch(error) {
        console.error('[ingredients.controller][createIngredient][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to create ingredient'
        });
    }
};


export const readIngredients: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        const ingredients = await ingredientsDAO.readIngredients(userId);
        
        res.status(200).json(ingredients);

    } catch(error) {
        console.error('[ingredients.controller][readIngredients][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attemptoing to read ingredients'
        });
    }
};

export const readIngredientByName: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        console.log('ingredient', req.params.ingredient);
        const ingredients = await ingredientsDAO.readIngredientByName(req.params.ingredient, userId);
        let ingredientToReturn = ingredients[0];

        res.status(200).json(ingredientToReturn);

    } catch(error) {
        console.error('[ingredients.controller][readIngredientsByName][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attemptoing to read ingredients'
        });
    }
};

export const readIngredientByNameSearch: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        console.log('search', req.params.search);
        const ingredients = await ingredientsDAO.readIngredientByNameSearch('%' + req.params.search + '%', userId);

        res.status(200).json(ingredients);

    } catch(error) {
        console.error('[ingredients.controller][readIngredientsByNameSearch][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attemptoing to read ingredients'
        });
    }
};

export const updateIngredient: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        const okPacket: OkPacket = await ingredientsDAO.updateIngredient(req.body, userId);

        console.log('req.body', req.body);

        console.log('ingredient', okPacket);

        res.status(200).json(okPacket);
        
    } catch(error){
        console.error('[ingredients.controller][updateIngredient][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to update ingredient'
        }); 
    }
}

export const deleteIngredient: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        let ingredientId = parseInt(req.params.ingredientId as string);

        console.log('ingredientId', ingredientId);

        if (!Number.isNaN(ingredientId)){
            const response = await ingredientsDAO.deleteIngredient(ingredientId, userId);

            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for ingredientId");
        }
    } catch (error) {
        console.error('[ingredients.controller][deleteIngredient][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to delete ingredient'
        }); 
    }
}