import { Request,Response} from "express";

export const home = (req:Request,res:Response)=>{
    res.render("home");
}

export const dog = (req:Request,res:Response)=>{
    res.render("dog");
}

export const fish = (req:Request,res:Response)=>{
    res.render("home");
}

