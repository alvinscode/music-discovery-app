import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/songs').then((response) => {
      setSongs(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;