import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artistName: { type: String, required: true },
  duration: { type: Number, require: true },
  songArt: String,
  album: String,
  year: Number,
  genre: String,
  description: String,
});

const Song = mongoose.model("song", songSchema);

export { Song, songSchema };
