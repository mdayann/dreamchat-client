/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">dreamchat</h1>
        <div>
          <input
            placeholder="Name"
            type="text"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Room"
            type="text"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Sign in
            </button>
          </Link>
          <p className="version">v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Join;
