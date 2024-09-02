import React from "react";
import { useParams } from "react-router-dom";

const EditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="text-4xl underline text-blue-400">Edit Page</h1>
      <p>Editing item with ID: {id}</p>
    </div>
  );
};

export default EditPage;
