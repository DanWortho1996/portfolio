import { useState, useEffect } from 'react';
import './DogImage.css';

const DogImage = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', {
        headers: {
          'x-api-key': 'live_v8FtZXpl3FaLd91eNGMLuSeXRDWGOvvJfEHDccAL3XFTzeHmXwGGRJdzcUXykIWz'
        }
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('API Response:', data); // This will log the API response
      if (data && data.length > 0) {
        const dogData = data[0];
        setDogImage(dogData.url);
        console.log('Image URL:', dogData.url); //This will log the image URL
        setAnimate(false); //This will reset animation
      } else {
        console.error('No dog image data available.');
      }
    } catch (error) {
      console.error('Error fetching dog image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomize = () => {
    setAnimate(true); //This Trigger's animation
    setTimeout(fetchDogImage, 500); //This will delay fetching a new image to allow animation to complete
  };

  return (
    <div className="dog-container">
      <h1>Dog's of The Year</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        dogImage ? (
          <div className="dog-image-wrapper">
            <div className={`dog-image-container ${animate ? 'bounce-out' : ''}`}>
              <img src={dogImage} alt="Dog" className="dog-image" />
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

export default DogImage;