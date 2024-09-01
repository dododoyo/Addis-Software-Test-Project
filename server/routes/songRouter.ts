import { Router } from "express";
import {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
} from "../controllers/songControllers";

const songRouter = Router();

songRouter.get("/", getSongs);
songRouter.post("/create", createSong);
songRouter.patch("/update", updateSong);
songRouter.delete("/delete", deleteSong);

export { songRouter };
