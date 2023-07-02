import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/songs').then((response) => {
      setSongs(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/songs/${id}`).then(() => {
      setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
    });
  };

  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <img src={song.albumArt} alt="Album Art" />
            <div>
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
            <button onClick={() => handleDelete(song.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
