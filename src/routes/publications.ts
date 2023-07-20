import {Router} from 'express';
import { getPublications } from '../controllers/publications';
import validateToken from './validate-token';


const router = Router();

router.get('/', validateToken, getPublications);

export default router;
