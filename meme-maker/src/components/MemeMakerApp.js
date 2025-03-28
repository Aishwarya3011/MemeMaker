// MemeMakerApp.js
import React, { useState } from 'react';
import styles from './MemeMakerAppStyles';
import '../App.css';
import { FaLinkedin } from 'react-icons/fa';

function MemeMakerApp() {
  const [imageUrl, setImageUrl] = useState('');
  const [resultText, setResultText] = useState('');
  const [memeImage, setMemeImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!imageUrl) {
      alert("Please enter an image URL!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5001/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: imageUrl }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResultText(data.text);
      setMemeImage(data.meme_image);
    } catch (error) {
      console.error('Error:', error);
      setResultText("Error generating meme text.");
      setMemeImage('');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      {/* Overlay div for background image */}
      <div style={styles.backgroundOverlay}></div>
      {/* Content div */}
      <div style={styles.content}>
        <h1 style={styles.header}>Meme Maker</h1>
        <h3 className="glitterText">
          Hint: Find free images at <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash.com</a>! 
          Right click on the image and select "Copy image address" to get the URL.
        </h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input 
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={handleUrlChange}
            style={styles.textInput}
          />
          <button type="submit" style={styles.button}>
            {loading ? "Generating..." : "Generate Meme"}
          </button>
        </form>
        {resultText && (
          <div style={styles.result}>
            {memeImage && (
              <div style={styles.memeContainer}>
                <img
                  src={`data:image/jpeg;base64,${memeImage}`}
                  alt="Meme"
                  style={styles.memeImage}
                />
                <div style={styles.overlayText}>
                  {resultText}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Footer div */}
      <div style={styles.footer}>
        <p style={styles.footerText}>
          Created by Aishwarya Dev 💜 
          Connect with me:
          <a
            href="https://www.linkedin.com/in/aishwaryadev3011/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkedinLink}
          >
            <FaLinkedin style={styles.linkedinIcon} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default MemeMakerApp;
