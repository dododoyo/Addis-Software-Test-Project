import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";

import { useAppSelector, AppDispatch } from "../lib/store";
import {
  fetchSongByIdStart,
  editSongStart,
} from "../lib/services/song/songSlice";
import { Song } from "../types";

const genres = ["Afro Beat", "Pop", "Jazz", "Rock", "Hip Hop"];

const EditPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { song, loading, editSongError, editSongSuccess } = useAppSelector(
    (state) => state.songReducer
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Song>();

  useEffect(() => {
    if (id) {
      dispatch(fetchSongByIdStart(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (song) {
      setValue("title", song.title ?? "");
      setValue("artistName", song.artistName ?? "");
      setValue("duration", song.duration ?? 0); // Assuming duration is a number
      setValue("songArt", song.songArt ?? "");
      setValue("album", song.album ?? "Single");
      setValue("year", song.year ?? 0); // Assuming year is a number
      setValue("description", song.description ?? "Song has no description");

      const genre = genres.includes(song.genre ?? "")
        ? song.genre
        : "Afro Beat";
      setValue("genre", genre);
    }
  }, [song, setValue]);
  useEffect(() => {
    if (editSongSuccess) {
      toast.success("Song Updated Successfully");
    }
  }, [editSongSuccess]);

  useEffect(() => {
    if (editSongError) {
      toast.error(`Error: ${editSongError}`);
      navigate("/");
    }
  }, [editSongError, navigate]);

  const onSubmit: SubmitHandler<Song> = (data) => {
    const songWithId = { ...data, _id: id || "" };
    dispatch(editSongStart(songWithId));
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <Container
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "center", mt: 10 }}
      >
        <CircularProgress size={80} />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Edit Song
        </Typography>

        <TextField
          label="Title"
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
          helperText={errors.title?.message}
          fullWidth
        />

        <TextField
          label="Artist Name"
          {...register("artistName", { required: "Artist Name is required" })}
          error={!!errors.artistName}
          helperText={errors.artistName?.message}
          fullWidth
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Duration (in seconds)"
            type="number"
            {...register("duration", {
              required: "Duration is required",
              valueAsNumber: true,
              min: { value: 1, message: "Duration must be a positive number." },
            })}
            error={!!errors.duration}
            helperText={errors.duration?.message}
            fullWidth
          />

          <TextField
            label="Year"
            type="number"
            {...register("year", {
              valueAsNumber: true,
              min: { value: 1800, message: "Year must be above 1800 G.C" },
            })}
            error={!!errors.year}
            helperText={errors.year?.message}
            fullWidth
          />
        </Box>

        <TextField label="Song Art URL" {...register("songArt")} fullWidth />

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField label="Album" {...register("album")} fullWidth />
          <TextField
            label="Genre"
            select
            {...register("genre", { required: "Genre is required" })}
            error={!!errors.genre}
            helperText={errors.genre?.message}
            fullWidth
          >
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <TextField
          label="Description"
          {...register("description", { required: "Description is required" })}
          error={!!errors.description}
          helperText={errors.description?.message}
          fullWidth
          multiline
          rows={4}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Update Song
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditPage;
