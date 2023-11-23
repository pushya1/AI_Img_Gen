// ImgGen.js
import React, { useState } from "react";
import styles from "./ImgGen.module.css";

const ImgGen = () => {
  const [searchText, setSearchText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerateImage = () => {
    // Simulating a backend request to get an image URL based on the search text
    // Replace this with actual backend API call in a real-world scenario
    console.log(searchText);
    const generatedImageUrl = `https://source.unsplash.com/400x300/?${searchText}`;

    setImageUrl(generatedImageUrl);
  };

  return (
    <div className={styles.imgGen}>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Enter text..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className={styles.generateButton} onClick={handleGenerateImage}>
        Generate
      </button>

      {imageUrl && (
        <div className={styles.imageBox}>
          <img src={imageUrl} alt="Generated" />
        </div>
      )}
    </div>
  );
};

export default ImgGen;
