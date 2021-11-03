import { Router,Request, Response } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/",PageController.home);
router.get("/dogs",PageController.dog);
router.get("/fish",PageController.fish);
router.get("/search",SearchController.search);

export default router;