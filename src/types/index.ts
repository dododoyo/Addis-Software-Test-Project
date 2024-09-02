export interface songDefaultState {
  value: {
    isLoading: boolean;
    isError: boolean;
    isDialogOpen: boolean;
  };
}
export interface SongCardProps {
  data: Song;
}
export interface Song {
  _id: string;
  title: string;
  artistName: string;
  duration: number;
  songArt: string;
  year: number;
  album: string | null;
  description: string | null;
  genre: string | null;
}

export interface SongState {
  songs: Song[];
  song: Song | null;
  loading: boolean;
  songId: string | null;

  fetchSongsSuccess: boolean;
  fetchSongByIdSuccess: boolean;
  createSongSuccess: boolean;
  editSongSuccess: boolean;
  deleteSongSuccess: boolean;

  fetchSongsError: null | string;
  fetchSongByIdError: null | string;
  createSongError: null | string;
  editSongError: null | string;
  deleteSongError: null | string;
}
