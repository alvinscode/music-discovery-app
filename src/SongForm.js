import React, { useState } from 'react';
import axios from 'axios';
import './SongForm.css'

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [albumArt, setAlbumArt] = useState('');

  const [songPreview, setSongPreview] = useState(null);

  const onSongAdded = () => {
    axios.get('http://localhost:3000/songs').then((response) => {
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

    axios.post('http://localhost:3000/songs', newSong).then(() => {
      setTitle('');
      setArtist('');
      setAlbumArt('');
      setSongPreview(null);
      onSongAdded();
    });
  };

  const handleAlbumArtChange = (event) => {
    setAlbumArt(event.target.value);
    setSongPreview(event.target.value);
  };

  return (
    <div className="wrapper">
      <h1>Add Song</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Song Title:
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
          <input type="text" value={albumArt} onChange={handleAlbumArtChange} />
        </label>
        <br />
        {songPreview && <img src={songPreview} alt="Album Art" />}
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default SongForm;
