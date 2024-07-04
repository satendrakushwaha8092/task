import { Router } from 'express';
import { createEvent,getAllEvent,updateEvent,deleteEvent,retriveEventById } from '../controllers/event.controller';

const router = Router();

router.post('/event', createEvent);
router.get('/event', getAllEvent);
router.post('/event/:id', updateEvent);
router.delete('/event/:id', deleteEvent);
router.post('/event/:id', retriveEventById);


export default router;
