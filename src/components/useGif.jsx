// useGif.js
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const baseURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
      const [gif, setGif] = useState('');
      const [loading, setLoading] = useState(false);

      async function fetchData(tag) {
            try {
                  setLoading(true);
                  const url = tag ? `${baseURL}&tag=${tag}` : baseURL;
                  const { data } = await axios.get(url);
                  setGif(data.data.images.fixed_height.url);
                  toast.success('GIF loaded successfully!');
            } catch (error) {
                  toast.error('Failed to load GIF!');
                  console.error('Error fetching GIF:', error);
            } finally {
                  setLoading(false);
            }
      }

      return { gif, loading, fetchData };
};

export default useGif;
