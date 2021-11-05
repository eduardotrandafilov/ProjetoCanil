import { Request,Response} from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req:Request,res:Response)=>{
    res.render("pages/page",{
        menu:createMenuObject(""),
        banner:{
            title:"Todos os animais",
            background:"allanimals.jpg"
        }
    });
}
