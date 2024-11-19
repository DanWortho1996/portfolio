import { useState, useEffect } from 'react';
import './CatImage.css';

const CatImage = () => {
  const [catImage, setCatImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', {
        headers: {
          'x-api-key': 'your-cat-api-key'
        }
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('API Response:', data); // This will log the API response
      if (data && data.length > 0) {
        const catData = data[0];
        setCatImage(catData.url);
        console.log('Image URL:', catData.url); // This will log the image URL
        setAnimate(false); // This will reset animation
      } else {
        console.error('No cat image data available.');
      }
    } catch (error) {
      console.error('Error fetching cat image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomize = () => {
    setAnimate(true); // This triggers animation
    setTimeout(fetchCatImage, 500); // This will delay fetching a new image to allow animation to complete
  };

  return (
    <div className="cat-container">
      <h1>Cat of The Year</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        catImage ? (
          <div className="cat-image-wrapper">
            <div className={`cat-image-container ${animate ? 'bounce-out' : ''}`}>
              <img src={catImage} alt="Cat" className="cat-image" />
              <button className="randomize-button" onClick={handleRandomize}>Randomize</button>
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )
      )}
    </div>
  );
};

export default CatImage;