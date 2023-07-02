import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/songs').then((response) => {
      setSongs(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/songs/${id}`).then(() => {
      setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
    });
  };

  const handleLike = (id) => {
    const likedSong = songs.find((song) => song.id === id);
    const updatedLikes = likedSong.likes + 1;

    axios
      .put(`http://localhost:3000/songs/${id}`, { ...likedSong, likes: updatedLikes })
      .then(() => {
        setSongs((prevSongs) =>
          prevSongs.map((song) => {
            if (song.id === id) {
              return { ...song, likes: updatedLikes };
            }
            return song;
          })
        );
      });
  };

  // Sort the songs array in descending order based on likes
  const sortedSongs = [...songs].sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {sortedSongs.map((song) => (
          <li key={song.id}>
            <img src={song.albumArt} alt="Album Art" style={{ width: '400px', height: '400px' }} />
            <div>
              <p>{song.title}</p>
              <p>{song.artist}</p>
              <p>Likes: {song.likes}</p>
            </div>
            <button onClick={() => handleLike(song.id)}>Like</button>
            <button onClick={() => handleDelete(song.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
