import express from "express";

//controllers
import { store } from "../controllers/User";

const router = express.Router();

router.post("/create", store);

export default router;
