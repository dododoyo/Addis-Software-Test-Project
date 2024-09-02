import React from "react";
import SongCard from "../components/SongCard";
import { SongData } from "../components/SongCard";

const dummySongs: SongData[] = [
  {
    id: 1,
    title: "Song One",
    artistName: "Abnet Agonafer",
    duration: 210,
    songArt: "https://via.placeholder.com/150",
    album: null,
    year: 2020,
    genre: "Afro Beats",
    description: "This is the first song description.",
  },
  {
    id: 2,
    title: "Song Two",
    artistName: "Artist B",
    duration: 180,
    songArt: "https://via.placeholder.com/150",
    album: "Album B",
    year: 2019,
    genre: "pop",
    description: "This is the second song description.",
  },
  {
    id: 3,
    title: "Song Three",
    artistName: "Artist C",
    duration: 240,
    songArt: "https://via.placeholder.com/150",
    album: "Album C",
    year: 2021,
    genre: "jazz",
    description: "This is the third song description.",
  },
  {
    id: 4,
    title: "Song Four",
    artistName: "Artist D",
    duration: 200,
    songArt: "https://via.placeholder.com/150",
    album: "Album D",
    year: 2018,
    genre: "afro",
    description: "This is the fourth song description.",
  },
  {
    id: 5,
    title: "Song Five",
    artistName: "Artist E",
    duration: 220,
    songArt: "https://via.placeholder.com/150",
    album: "Album E",
    year: 2017,
    genre: "Afro Beats",
    description: "This is the fifth song description.",
  },
];
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex justify-between my-4 mx-6">
          <h1 className="text-5xl font-bold text-gray-800">Songs</h1>
        </div>

        <div className="grid grid-cols-2 gap-1">
          {dummySongs.map((data) => (
            <SongCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
