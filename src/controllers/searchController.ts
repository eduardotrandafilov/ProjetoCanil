import { Request,Response} from "express";
import { convertToObject } from "typescript";
import { createMenuObject } from "../helpers/createMenuObject";
import { PetObject } from "../models/Pet";

export const search = (req:Request,res:Response)=>{
    const nome = req.query.q;
    const lista = PetObject.getFromName(nome);
    res.render("pages/page",{
        menu:createMenuObject(""),
        banner:{
            title:"Todos os animais",
            background:"allanimals.jpg"
        },
        lista
    });
}
