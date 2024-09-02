import React from "react";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import img from "../../public/error.png";

const Error: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <img src={img} alt="Error" className="max-w-xs max-h-xs mb-4" />
          <h3 className="text-2xl font-bold mb-2">Ohh! Page not found</h3>
          <p className="text-lg mb-4">It looks like we can't find your page.</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Songs
          </Link>
        </div>
      );
    }
  }

  return <div>Something went wrong</div>;
};

export default Error;
