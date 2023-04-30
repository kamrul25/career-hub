import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center mt-[35vh] text-red-600">
      <h1 className="text-3xl font-bold mb-5">Oops!</h1>
      <p className="text-3xl font-bold mb-5">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-3xl font-bold mb-5">
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="text-3xl font-bold mb-5">
        <i>{status}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
