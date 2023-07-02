import React, { useState } from 'react';
import axios from 'axios';

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [albumArt, setAlbumArt] = useState('');

  const onSongAdded = () => {
    axios.get('http://localhost:8000/songs').then((response) => {
      console.log(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newSong = {
      title,
      artist,
      albumArt,
      likes: 0
    };

    axios.post('http://localhost:8000/songs', newSong).then(() => {
      setTitle('');
      setArtist('');
      setAlbumArt('');
      onSongAdded();
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
          Album Art:
          <input type="text" value={albumArt} onChange={(e) => setAlbumArt(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default SongForm;
