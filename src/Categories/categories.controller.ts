import { RequestHandler, Request, Response } from "express";
import { OkPacket } from "mysql";
import * as categoriesDAO from './categories.dao';

export const readCategories: RequestHandler = async (req: Request, res: Response) => {
    try{
        console.log('categories', req.body);
        const categories = await categoriesDAO.readCategories();
        res.status(200).json(categories);
    }catch(error){
        console.error('[categories.controller][readCategories][Error] ', error);
        res.status(500).json({
            message: 'There was an error when attempting to read categories'
        });
    }
}