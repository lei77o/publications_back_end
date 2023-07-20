import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/user";
import jwt from 'jsonwebtoken'

export const newUser = async (req: Request, res: Response) => {
    const {userName, password, email } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.findOne({
    where:{
        userName: userName
    }
    });

    if(user){
        return res.status(400).json({
            msg: `User ${userName} already exists`
        })
    }

    try{ 
        await User.create({
            userName: userName,
            password: hashPassword,
            email: email
        })        
        res.json({
            msg: `User ${userName} created successfully`,
    
        })   
    }
    catch(error){
        res.status(400).json({
            msg: ''
        })
    }
   
}

export const loginUser = async (req: Request, res: Response) => {
    const {userName, password } = req.body;

    const user: any = await User.findOne({
        where:{
            userName: userName
        }
    });

    if(!user){
        res.status(400).json({
            msg: `User ${userName} does not exist`
        })
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    console.log(passwordValid);

    if(!passwordValid){
        return res.status(400).json({
            msg: 'Password is wrong'
        })
    }

    const token = jwt.sign({
        username: userName,
    },process.env.SECRET_KEY || 'sinc12')
        
    res.json(token);
}