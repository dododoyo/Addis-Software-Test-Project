import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../lib/store";
import { fetchSongsStart } from "../lib/services/song/songSlice";

import SongCard from "../components/SongCard";
import SongCardSkeleton from "../components/SongCardSkeleton";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { songs, loading, fetchSongsError } = useAppSelector(
    (state) => state.songReducer
  );

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  if (fetchSongsError) return <div>Error: {fetchSongsError}</div>;

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-4 mx-6">
          <h1 className="text-5xl font-bold text-gray-800">Songs</h1>
          <NavLink to="/create">
            <button className="flex items-center font-medium text-green-500 px-4 text-2xl rounded">
              Add Song
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </button>
          </NavLink>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <SongCardSkeleton key={index} />
            ))}
          </div>
        ) : songs && songs.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {songs.map((data, index) => (
              <SongCard key={index} data={data} />
            ))}
          </div>
        ) : (
          <h1 className="text-3xl text-center my-20">No Songs to display</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
