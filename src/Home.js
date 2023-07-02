import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'

const Home = () => {
  const [featuredArtists, setFeaturedArtists] = useState([]);

  useEffect(() => {
    const fetchFeaturedArtists = async () => {
      try {
        const response = await axios.get('http://localhost:3000/songs?_limit=3&_sort=likes&_order=desc');
        setFeaturedArtists(response.data);
      } catch (error) {
        console.error('Error fetching featured artists:', error);
      }
    };

    fetchFeaturedArtists();
  }, []);

  return (
    <div className="wrapper">
      <h1 className='hometitle'>Welcome to Music Discovery App!</h1>
      <h2>Featured Artists</h2>
      <ul className="featuredlist">
        {featuredArtists.map((song) => (
          <li key={song.artist}>
            <img src={song.albumArt} alt="Album Art" style={{ width: '300px', height: '300px', marginTop: '10px' }} />
            <p className='homeartist'>{song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
