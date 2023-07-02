import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Welcome to Music Discovery App!</h1>
      <h2>Featured Artists</h2>
      <ul>
        {featuredArtists.map((song) => (
          <li key={song.artist}>
            <img src={song.albumArt} alt="Album Art" style={{ width: '400px', height: '400px' }} />
            <p>{song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
