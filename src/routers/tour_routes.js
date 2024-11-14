import { Router } from "express";
import { createTourController, deleteTourController, getAllToursController, getTourController, updateTourController } from "../controllers/tour_controler.js";

const router = Router()

router.get("/tours",getAllToursController)

//CLASE 9(?)

router.post("/tours",createTourController)
router.put("/tours/:id",updateTourController)
router.delete("/tours/:id",deleteTourController)
//solo obtiene un tour
router.get("/tours/:id",getTourController)


export default router