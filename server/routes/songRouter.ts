import { Router } from "express";
import {
  getAllSongsController,
  getSongController,
  createSongController,
  updateSongController,
  deleteSongController,
} from "../controllers/songControllers";

const songRouter = Router();

songRouter.get("/", getAllSongsController);
songRouter.get("/:id", getSongController);
songRouter.post("/create", createSongController);
songRouter.patch("/update/:id", updateSongController);
songRouter.delete("/delete/:id", deleteSongController);

export { songRouter };
