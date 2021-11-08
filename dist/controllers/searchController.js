"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const Pet_1 = require("../models/Pet");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect("/");
        return;
    }
    let lista = Pet_1.PetObject.getFromName(query);
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)(""),
        lista,
        query
    });
};
exports.search = search;
