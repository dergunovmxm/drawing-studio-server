import express from "express";
import * as galleryController from "../controllers/galleryController.js";

const router = express.Router();

router.get("/images", galleryController.getGallery);

export default router;
