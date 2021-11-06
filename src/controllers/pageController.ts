import { Request,Response} from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import {PetObject} from "../models/Pet";

export const home = (req:Request,res:Response)=>{
    const lista = PetObject.getAll();
    res.render("pages/page",{
        menu:createMenuObject("all"),
        banner:{
            title:"Todos os animais",
            background:"allanimals.jpg"
        },
        lista
    });
}

export const dogs = (req:Request,res:Response)=>{
    const lista = PetObject.getFromType("dog");
    res.render("pages/page",{
        menu:createMenuObject("dog"),
        banner:{
            title:"Cachorros",
            background:"banner_dog.jpg"
        },
        lista
    });
}

export const cats = (req:Request,res:Response)=>{
    const lista = PetObject.getFromType("cat");
    res.render("pages/page",{
        menu:createMenuObject("cat"),
        banner:{
            title:"Gatos",
            background:"banner_cat.jpg"
        },
        lista
    });
}


export const fishes = (req:Request,res:Response)=>{
    const lista = PetObject.getFromType("fish");
    res.render("pages/page",{
        menu:createMenuObject("fish"),
        banner:{
            title:"Peixes",
            background:"banner_fish.jpg"
        },
        lista
    });
}