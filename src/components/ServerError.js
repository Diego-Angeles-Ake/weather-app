import React from 'react';

export default function ServerError({ serverError: error }) {
  const status = error.response.status;
  return (
    <>
      <h1>{error.message}</h1>
      <img src={`https://http.cat/${status}`} alt='' />
    </>
  );
}
