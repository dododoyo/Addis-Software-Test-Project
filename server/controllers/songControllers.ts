import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const getSongs = async (req: Request, res: Response): Promise<void> => {
  try {
    // TODO: Implement fetching songs from Database
    res.status(StatusCodes.OK).json({ msg: "Songs Sent" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
const createSong = async (req: Request, res: Response): Promise<void> => {
  try {
    // TODO: Implement creating songs
    res.status(StatusCodes.OK).json({ msg: "Song Created" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
const updateSong = async (req: Request, res: Response): Promise<void> => {
  try {
    // TODO: Implement update song data
    res.status(StatusCodes.OK).json({ msg: "Song Data Updated" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
const deleteSong = async (req: Request, res: Response): Promise<void> => {
  try {
    // TODO: Implement deleting song
    res.status(StatusCodes.OK).json({ msg: "Song Deleted" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export { getSongs, createSong, updateSong, deleteSong };
