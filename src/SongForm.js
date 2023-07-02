import React, { useState } from 'react';
import axios from 'axios';

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [albumArt, setAlbumArt] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8000/songs', { title, artist, albumArt }).then(() => {
      setTitle('');
      setArtist('');
      setAlbumArt('');
    });
  };

  return (
    <div>
      <h1>Add Song</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Artist:
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </label>
        <br />
        <label>
          Album Art URL:
          <input type="text" value={albumArt} onChange={(e) => setAlbumArt(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default SongForm;
