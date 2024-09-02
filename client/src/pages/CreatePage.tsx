import React from "react";
import { useNavigate } from "react-router-dom";
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
import { createSongStart } from "../lib/services/song/songSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../lib/store";
import { Song } from "../types";

const genres = [
  "Afro Beats",
  "Pop",
  "Jazz",
  "Rock",
  "Hip Hop",
  "Cultural",
  "Tizita",
];

const CreatePage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Song>();
  const dispatch = useDispatch<AppDispatch>();

  const loading = useAppSelector((state) => state.songReducer.loading);
  const error = useAppSelector((state) => state.songReducer.error);

  const onSubmit: SubmitHandler<Song> = (data) => {
    dispatch(createSongStart(data));
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Add New Song
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
        {loading ? (
          <CircularProgress />
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Create Song
            </Button>
          </Box>
        )}
      </Box>
      {error && <Typography color="error">Error: {error}</Typography>}
    </Container>
  );
};

export default CreatePage;
