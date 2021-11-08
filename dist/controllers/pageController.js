"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const Pet_1 = require("../models/Pet");
const home = (req, res) => {
    const lista = Pet_1.PetObject.getAll();
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        lista
    });
};
exports.home = home;
const dogs = (req, res) => {
    const lista = Pet_1.PetObject.getFromType("dog");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("dog"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        lista
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    const lista = Pet_1.PetObject.getFromType("cat");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("cat"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        lista
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    const lista = Pet_1.PetObject.getFromType("fish");
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("fish"),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        lista
    });
};
exports.fishes = fishes;
