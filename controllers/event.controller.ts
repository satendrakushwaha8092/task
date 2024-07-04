import { Request, Response } from 'express';
import event from "../models/event.model";

export const createEvent = async (req: Request, res: Response) =>{
    try {
        const data = await event.create(req.body);
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}

export const getAllEvent = async (req: Request, res: Response) =>{
    try {
        const events = await event.aggregate([
            {
              $lookup: {
                from: 'locations', // The name of the Location collection in MongoDB
                localField: 'location',
                foreignField: 'id',
                as: 'location'
              }
            },
            {
              $unwind: '$location' // To deconstruct the array of locations
            }
          ]);
        res.status(201).json(events);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}
export const updateEvent = async (req: Request, res: Response) =>{
    try {
        const id:any = req.params.id
        const { eventName, eventDate, email, phone, location } = req.body;
        const data = await event.findOneAndUpdate( { id },{ eventName, eventDate, email, phone, location },{ new: true });
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}
export const deleteEvent = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const data = await event.findOneAndUpdate( { id },{deletedAt:new Date()},{ new: true });
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}

export const retriveEventById = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const data = await event.findOneAndUpdate( { id },{ deletedAt:null},{ new: true });
        res.status(201).json(data);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}