import React from 'react';
import logo from './Loading.svg';
import './Loading.css';

export default function Loading() {
  return (
    <>
      <div className='wrapper-loading'>
        <h1>Loading...</h1>
        <img src={logo} alt='https://http.cat/102' />
      </div>
    </>
  );
}
