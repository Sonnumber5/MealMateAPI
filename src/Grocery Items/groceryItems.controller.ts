import { Request, RequestHandler, Response } from "express";
import { GroceryItem } from "./groceryItems.model";
import { OkPacket } from "mysql";
import * as groceryItemsDAO from './groceryItems.dao';

export const createGroceryItem = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        const okPacket: OkPacket = await groceryItemsDAO.createGroceryItem(req.body, userId);

        console.log('req.body', req.body);

        res.status(201).json(okPacket);
    } catch(error){
        console.error('[groceryItems.controller][createGroceryItem][Error]', error);
        res.status(500).json({
            message: 'There was an error when attempting to create a grocery item'
        });
    }
};

export const readGroceryItems = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        const groceryItems = await groceryItemsDAO.readGroceryItems(userId);

        res.status(200).json(groceryItems);
    } catch(error){
        console.log('[groceryItems.controller][readGroceryItems][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to read grocery items'
        });
    }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        const groceryItemId = parseInt(req.params.groceryItemId as string);
        const okPacket: OkPacket = await groceryItemsDAO.updateGroceryItem(req.body, groceryItemId, userId);

        console.log('req.body', req.body);

        res.status(200).json(okPacket);
    } catch(error){
        console.log('[groceryItems.controller][updateGroceryItem][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to update the grocery item'
        });
    }
};

export const deleteGroceryItem = async (req: Request, res: Response) => {
    let userId = 1; //user id 1 for testing 
    try{
        let groceryItemId = parseInt(req.params.groceryItemId as string);
        const okPacket: OkPacket = await groceryItemsDAO.deleteGroceryItem(groceryItemId, userId);

        console.log('req.body', req.body);

        res.status(200).json(okPacket);
    } catch(error){
        console.log('[groceryItems.controller][updateGroceryItem][Error]', error);
        res.status(500).json({
            message: 'There was an error while attempting to update the grocery item'
        });
    }
};