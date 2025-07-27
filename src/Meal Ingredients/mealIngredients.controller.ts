import { RequestHandler, Request, Response } from "express";
import { OkPacket } from "mysql";
import { MealIngredientDTO, MealIngredient } from "./mealIngredients.model";
import * as mealIngredientsDAO from './mealIngredients.dao';

export const createMealIngredient: RequestHandler = async (req: Request, res: Response) => {
    try{
        
        const okPacket: OkPacket = await mealIngredientsDAO.createMealIngredient(req.body);

        console.log('req.body', req.body);

        console.log('mealIngredient', okPacket);

        res.status(201).json(okPacket);
    } catch (error){
        console.log('[mealIngredients.controller][createMealIngredient][Error]', error);
        res.status(500).json({
            message: 'There was an error when attempting to create meal ingredient'
        });
    }
};

export const readMeasurements: RequestHandler = async (req: Request, res: Response) => {
    try{
        console.log('Measurements', req.body);
        const measurements = await mealIngredientsDAO.readMeasurements();
        res.status(200).json(measurements);
    }catch(error){
        console.error('[mealIngredients.controller][readMeasurements][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to read measurements'
        });
    }
}

export const readMealIngredientDTOByMealAndIngredientId: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        let mealId = parseInt(req.params.mealId);
        let ingredientId = parseInt(req.params.ingredientId);
        console.log('Meal Ingredient', req.body);

        const mealIngredients = await mealIngredientsDAO.readMealIngredientDTOByMealAndIngredientId(mealId, ingredientId, userId);

        const mealIngredient = mealIngredients[0];

        res.status(200).json(mealIngredient);
    }catch(error){
        console.error('[mealIngredients.controller][readMealIngredientDTOByMealAndIngredientId][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to read the meal ingredient'
        });
    }
}

export const readMealIngredientsDTO: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        console.log('Meal Ingredients', req.body);

        const mealIngredients = await mealIngredientsDAO.readMealIngredients(userId);

        res.status(200).json(mealIngredients);
    }catch(error){
        console.error('[mealIngredients.controller][readMealIngredients][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to read meal ingredients'
        });
    }
}

export const readMealIngredientsByMealId: RequestHandler = async (req: Request, res: Response) => {
    try{
        console.log('Meal Ingredients', req.body);

        let mealId = parseInt(req.params.mealId as string);
        const mealIngredients = await mealIngredientsDAO.readMealIngredientsByMealId(mealId);
            
        res.status(200).json(mealIngredients);

    } catch(error) {
        console.error('[mealIngredients.controller][readMealIngredientsByMealId][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to read meal ingredients by meal ID'
        });
    }
};

export const updateMealIngredient: RequestHandler = async (req: Request, res: Response) => {
    try{
        let mealIngredient: MealIngredient = {
            mealId: parseInt(req.params.mealId as string),
            ingredientId: parseInt(req.params.ingredientId as string),
            qty: parseInt(req.body.qty as string),
            measurementId: parseInt(req.body.measurementId as string)
        };

        let originalIngredientId = parseInt(req.params.originalIngredientId);

        const okPacket: OkPacket = await mealIngredientsDAO.updateMealIngredient(originalIngredientId, mealIngredient);

        console.log('req.body', req.body);
        
        console.log('Meal Ingredient', okPacket);

        res.status(200).json(okPacket);

    } catch(error) {
        console.error('[mealIngredients.controller][updateMealIngredient][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attemptoing to update meal ingredient'
        });
    }
};

export const deleteMealIngredient: RequestHandler = async (req: Request, res: Response) => {
    try{
        let mealId = parseInt(req.params.mealId as string);
        let ingredientId = parseInt(req.params.ingredientId as string);

        console.log('mealId', mealId);
        console.log('ingredientId', ingredientId);

        if (!Number.isNaN(mealId) && !Number.isNaN(ingredientId)){
            const response = await mealIngredientsDAO.deleteMealIngredient(mealId, ingredientId);

            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for mealId and ingredientId");
        }
    } catch (error) {
        console.error('[mealIngredients.controller][deleteMealIngredient][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to delete meal ingredient'
        }); 
    }
}

