import { RequestHandler, Request, Response } from "express";
import { MealPlan, MealPlanDTO } from "./mealPlans.model";
import { OkPacket } from "mysql";
import * as mealPlanDAO from './mealPlans.dao';
import {readIngredients} from '../Meals/meals.controller';
import { readMealById } from "../Meals/meals.dao";

export const createMealPlan: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1; // for testing purposes
    try {
        const okPacket: OkPacket = await mealPlanDAO.createMealPlan(req.body, userId);

        console.log('req.body', req.body);
        console.log('mealPlan', okPacket);

        res.status(201).json(okPacket);
    } catch (error){
        console.log('[mealPlans.controller][createMealPlan][Error]', error);
        res.status(500).json({
            message: 'There was an error when attempting to create a meal plan'
        });
    }
}

export const readMealPlans: RequestHandler = async(req: Request, res: Response) => {
    let userId = 1;
    try {
        const mealPlans = await mealPlanDAO.readMealPlans(userId);
       
        await readMealsForMealPlans(mealPlans);

        res.status(200).json(mealPlans);
    } catch(error){
        console.log('[mealPlans.controller][readMealPlans][Error]', error);
        res.status(500).json({
            message: 'There was an error when attempting to read meal plans'
        });
    }
}

async function readMealsForMealPlans(mealPlans: MealPlanDTO[]) {
    let userId = 1;
    for (let i = 0; i < mealPlans.length; i++){
        try{
            const meals = await readMealById(mealPlans[i].mealId, userId);
            mealPlans[i].meal = meals[0];
            await readIngredients(meals);
            console.log("MealPlan[" + i + "] meal element:",  mealPlans[i].meal);
        }catch(error){
            console.error('Error fetching meal for mealId', mealPlans[i].mealId, error);
        }
    }
}

export const updateMealPlan: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try {
        const okPacket: OkPacket = await mealPlanDAO.updateMealPlan(req.body, userId);

        console.log('req.body', req.body);

        console.log('mealPlan', okPacket);

        res.status(200).json(okPacket);

    } catch(error) {
        console.log('[mealPlans.controller][updateMealPlan][Error]', error);
        res.status(500).json({
            message: 'There was an error when attempting to update meal plan'
        });
    }
}

export const deleteMealPlan: RequestHandler = async (req: Request, res: Response) => {
    let userId = 1;
    try {
        let mealPlanId = parseInt(req.params.mealPlanId as string);
        const okPacket: OkPacket = await mealPlanDAO.deleteMealPlan(mealPlanId, userId);

        console.log('userId', userId);
        console.log('mealPlanId', mealPlanId);

        res.status(200).json(okPacket);
    } catch (error) {
        console.log('[mealPlans.controller][deleteMealPlan][Error]', error);
        res.status(500).json({
            message: 'there was an error when attempting to delete a meal plan'
        });
    }
}