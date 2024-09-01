import { Router } from "express";
import {
  getSongsController,
  createSongController,
  updateSongController,
  deleteSongController,
} from "../controllers/songControllers";

const songRouter = Router();

songRouter.get("/", getSongsController);
songRouter.post("/create", createSongController);
songRouter.patch("/update/:id", updateSongController);
songRouter.delete("/delete/:id", deleteSongController);

export { songRouter };
