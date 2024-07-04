import { Router } from 'express';
import { createLocation,getAllLocation,updateLocation,deleteLocation,retriveLocationById } from '../controllers/location.controller';

const router = Router();

router.post('/location', createLocation);
router.get('/location', getAllLocation);
router.post('/location/:id', updateLocation);
router.delete('/location/:id', deleteLocation);
router.post('/location/:id', retriveLocationById);


export default router;
