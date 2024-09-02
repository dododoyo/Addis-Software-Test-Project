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
  error: string | null;
  songId: string | null;
}
