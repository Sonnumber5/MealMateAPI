import { Meal, MealDTO } from "./meals.model";
import { RequestHandler, Request, Response } from "express";
import { OkPacket } from "mysql";
import * as mealsDAO from './meals.dao';
import { Ingredient } from "../Ingredients/ingredients.model";
import * as mealIngredientsDAO from "../Meal Ingredients/mealIngredients.dao";

export const createMeal: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const okPacket: OkPacket = await mealsDAO.createMeal(req.body, userId);

        console.log('req.body', req.body);

        console.log('Meal', okPacket);

        res.status(201).json(okPacket);
    }catch(error){
        console.log('[meals.controller][createMeal][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to create a meal'
        });
    }
}


export const readMeals: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const meals = await mealsDAO.readMeals(userId);

        await readIngredients(meals);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMeals][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals'
        });
    }
}

export const readMealsBySearchParams: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const searchParam = req.params.searchParam as string || '';
        const meals = await mealsDAO.readMealsBySearchParams(userId, searchParam);

        await readIngredients(meals);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMeals][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals'
        });
    }
}

export const readMealsByCategoryId: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        let categoryId = parseInt(req.params.categoryId as string)
        const meals = await mealsDAO.readMealsByCategoryId(categoryId, userId);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByCategory][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by category'
        });
    }
}

export const readMealsByCategory: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        let category = req.params.category as string;
        const meals = await mealsDAO.readMealsByCategory(category, userId);

        await readIngredients(meals);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByCategory][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by category'
        });
    }
}

export const readMealsByNameSearchAndCategory: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        let categoryId = parseInt(req.params.categoryId as string);
        let mealName = (req.params.search as string);
        const meals = await mealsDAO.readMealsByNameSearchAndCategory(categoryId, mealName, userId);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByNameSearchAndCategory][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by category and name'
        });
    }
}

export const readMealById: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        let mealId = parseInt(req.params.mealId as string)
        const meals = await mealsDAO.readMealById(mealId, userId);

        let meal = meals[0];
        res.status(200).json(meal);
    }catch (error){
        console.log('[meals.controller][readMealsById][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by id'
        });
    }
}

export const readMealByName: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const meals = await mealsDAO.readMealByName(req.params.mealName, userId);

        let meal = meals[0];
        res.status(200).json(meal);
    }catch (error){
        console.log('[meals.controller][readMealByName][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by name'
        });
    }
}

export const readMealsByNameSearch: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const meals = await mealsDAO.readMealsByNameSearch('%' + req.params.search + '%', userId);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByNameSearch][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by name search'
        });
    }
}

export const readMealsByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const meals = await mealsDAO.readMealsByDescriptionSearch('%' + req.params.search + '%', userId);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByDescriptionSearch][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by description search'
        });
    }
}

export const readMealsByAlphabetAsc: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const meals = await mealsDAO.readMealsByAlphabetAsc(userId);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByAlphabetAsc][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by alphabet in ascending order'
        });
    }
}

export const readMealsByAlphabetDesc: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const meals = await mealsDAO.readMealsByAlphabetDesc(userId);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByAlphabetDesc][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by alphabet in descending order'
        });
    }
}

export const readMealsByIngredientSearch: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const meals = await mealsDAO.readMealsByIngredientSearch('%' + req.params.search + '%', userId);

        res.status(200).json(meals);
    }catch (error){
        console.log('[meals.controller][readMealsByIngredientSearch][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read meals by ingredient search'
        });
    }
}

export const updateMeal: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        const okPacket: OkPacket = await mealsDAO.updateMeal(req.body, userId);

        console.log('req.body', req.body);

        console.log('meal', okPacket);

        res.status(200).json(okPacket);
    }catch (error){
        console.log('[meals.controller][updateMeal][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to update meal'
        });
    }
}

export const deleteMeal: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try{
        let mealId = parseInt(req.params.mealId as string);
        const okPacket: OkPacket = await mealsDAO.deleteMeal(mealId, userId);

        console.log('mealId', mealId);
        console.log('userId', userId);
        
        res.status(200).json(okPacket);
    }catch (error){
        console.log('[meals.controller][deleteMeal][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to delete meal'
        });
    }
}

async function readIngredients(meals: MealDTO[]) {
    console.log('readIngredients called');
    for (let i = 0; i < meals.length; i++){
        try{
            const mealIngredients = await mealIngredientsDAO.readMealIngredientsByMealId(meals[i].mealId);
            meals[i].mealIngredients = mealIngredients;
        } catch(error){
            console.error('Error fetching ingredients for mealId', meals[i].mealId, error);
            meals[i].mealIngredients = [];
        }
    }
}