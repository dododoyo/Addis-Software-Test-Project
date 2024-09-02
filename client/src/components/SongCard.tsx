import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../lib/store";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

import EditButton from "./EditButton";
import { updateIsDialogOpen } from "../lib/features/dialog/dialogSlice";
import { SongCardProps } from "../types";
import { deleteSongStart } from "../lib/services/song/songSlice";

function formatDuration(duration: number): string {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

const SongCard: React.FC<SongCardProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isDialogOpen = useAppSelector(
    (state) => state.dialogReducer.value.isDialogOpen
  );

  const handleDelete = (id: string) => {
    dispatch(deleteSongStart(id));
  };

  const handleClickOpen = () => {
    dispatch(updateIsDialogOpen(true));
  };

  const handleClose = (confirmed: boolean) => {
    dispatch(updateIsDialogOpen(false));
    if (confirmed) {
      handleDelete(data._id);
    }
  };
  return (
    <div className="border border-gray-400 m-4 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-200 ease-in-out">
      <div className="flex items-center mb-4">
        <img src={data.songArt} alt="Song Art" className="mr-4 h-24 w-24 " />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900">{data.title}</h2>
          <p className="text-lg text-gray-700">
            {data.artistName} • {formatDuration(data.duration)}
          </p>
        </div>
        <div className="flex space-x-2">
          <EditButton id={data._id} />
          {/* DeleteButton  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9 text-red-500 cursor-pointer"
            onClick={handleClickOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        {data.description ? data.description : "Song has no Description"}
      </p>
      <div className="flex space-x-4">
        {data.album ? (
          <p
            className={`inline-block rounded-full border bg-white px-3 py-1 font-semibold mr-2 text-xl text-blue-600 border-blue-600
            `}
          >
            {data.album}
          </p>
        ) : (
          <p
            className={`inline-block rounded-full border bg-white px-3 py-1 font-semibold mr-2 text-xl text-green-600 border-green-600`}
          >
            Single
          </p>
        )}

        {data.genre && (
          <span
            key={data.genre}
            className={`inline-block rounded-full border bg-white px-3 py-1 font-semibold mr-2 text-xl ${
              data.genre === "Afro Beats"
                ? "text-yellow-600 border-yellow-600"
                : "text-violet-600 border-violet-600"
            }`}
          >
            {data.genre}
          </span>
        )}
        <p
          className={`inline-block rounded-full border bg-white px-3 py-1 text-md font-semibold mr-2 text-xl text-lime-500 border-lime-600`}
        >
          {data.year}
        </p>
      </div>

      <Dialog
        open={isDialogOpen}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
        }}
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this song?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleClose(false)}
            color="primary"
            size="medium"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleClose(true)}
            color="success"
            size="medium"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SongCard;
