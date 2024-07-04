import { Request, Response } from 'express';
import location from "../models/location.model";

export const createLocation = async (req: Request, res: Response) =>{
    try {
        const data = await location.create(req.body);
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}

export const getAllLocation = async (req: Request, res: Response) =>{
    try {
        const data = await location.find();
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}
export const updateLocation = async (req: Request, res: Response) =>{
    try {
        const id:any = req.params.id
        const { street, city, state, zip } = req.body;
        const data = await location.findOneAndUpdate( { id },{ street, city, state, zip },{ new: true });
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}
export const deleteLocation = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const data = await location.findOneAndUpdate( { id },{deletedAt:new Date()},{ new: true });
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}

export const retriveLocationById = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const data = await location.findOneAndUpdate( { id },{ deletedAt:null},{ new: true });
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}