import {Request, Response} from 'express';
import { Publication } from '../models/publications'


export const getPublications = async (req: Request, res: Response) => {
    const listPublications = await Publication.findAll();

    res.json(listPublications);
}