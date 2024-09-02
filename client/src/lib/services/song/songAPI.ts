import { Song } from "../../../types";
const BASE_URL = import.meta.env.VITE_BASE_URL;

if (!BASE_URL) throw Error("BASE_URL is not defined.");

export const fetchSongsAPI = async (): Promise<Song[]> => {
  const response = await fetch(`${BASE_URL}/song`);
  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }
  return response.json();
};

export const fetchSongByIdAPI = async (id: number): Promise<Song> => {
  const response = await fetch(`${BASE_URL}/song/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch song with id ${id}`);
  }
  return await response.json();
};

export const createSongAPI = async (song: Song): Promise<Song> => {
  const response = await fetch(`${BASE_URL}/song/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });
  if (!response.ok) {
    throw new Error("Failed to create song");
  }
  return await response.json();
};

export const editSongAPI = async (song: Song): Promise<Song> => {
  const response = await fetch(`${BASE_URL}/song/update/${song._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });
  if (!response.ok) {
    throw new Error(`Failed to edit song with id ${song._id}`);
  }
  return await response.json();
};

export const deleteSongAPI = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/song/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete song with id ${id}`);
  }
  return await response.json();
};
