import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Songs.css'

const Songs = () => {
  const [songs, setSongs] = useState([]);

  // I chose to use axios here because I was originally going to fetch from an external API but I have decided against it for now.
  useEffect(() => {
    axios.get('https://music-discovery-app.onrender.com/songs').then((response) => {
      setSongs(response.data);
    });
  }, []);

  // Delete button
  const handleDelete = (id) => {
    axios.delete(`https://music-discovery-app.onrender.com/songs/${id}`).then(() => {
      setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
    });
  };
  
  // Like button
  const handleLike = (id) => {
    const likedSong = songs.find((song) => song.id === id);
    const updatedLikes = likedSong.likes + 1;

    axios
      .put(`https://music-discovery-app.onrender.com/songs/${id}`, { ...likedSong, likes: updatedLikes })
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
    <div className="songlist">
      <h1>Song List</h1>
      <ul className='songs' style={{ display: 'flex', overflowX: 'auto', maxWidth: '100%' }}>
        
        {sortedSongs.map((song) => (
          <li key={song.id}>      
            <img src={song.albumArt} alt="Album Art" style={{ width: '200px', height: '200px', marginRight: '100px'}} />
            <div>
              <p className="title">{song.title}</p>
              <p className="artist">{song.artist}</p>
              <p className="likes">Likes: {song.likes}</p>
            </div>
            <div className='buttons'>
            <button onClick={() => handleLike(song.id)} className='like'>❤️</button>{' '}
            <button onClick={() => handleDelete(song.id)} className='delete'>❌</button>  
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
