import { Request,Response} from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { PetObject } from "../models/Pet";

export const search = (req:Request,res:Response)=>{
    let query:string = req.query.q as string;
    if(!query){
        res.redirect("/");
        return;
    }
    let lista = PetObject.getFromName(query);    

    res.render("pages/page",{
            menu:createMenuObject(""),
            lista,
            query
    });
}
