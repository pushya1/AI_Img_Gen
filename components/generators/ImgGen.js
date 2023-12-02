import React, { useState } from "react";
import styles from "./ImgGen.module.css";
import Spinner from "../layout/Spinner"; // Import the LoadingSpinner component

const ImgGen = () => {
  const [searchText, setSearchText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const [error, setError] = useState(null); // New state for error
  const jD = { text: searchText };

  const handleGenerateImage = async (e) => {
    e.preventDefault();

    // Set loading to true when starting the image generation process
    setLoading(true);

    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jD),
      });

      if (!response.ok) {
        // Handle non-OK responses (e.g., server error)
        throw new Error(`Failed to generate image: ${response.status}`);
      }

      const data = await response.json();
      const generatedImageUrl = data.imageUrl;
      console.log("frontend-link-received: ", generatedImageUrl);
      setImageUrl(generatedImageUrl);
    } catch (error) {
      // Handle errors by setting the error state
      console.error("Error fetching data:", error);
      setError("Failed to generate image. Please try again.");
    } finally {
      // Set loading to false regardless of success or error
      setLoading(false);
    }
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

      {loading ? (
        <Spinner />
      ) : (
        <button className={styles.generateButton} onClick={handleGenerateImage}>
          Generate
        </button>
      )}
      {error && <p className={styles.error}>{error}</p>}
      {imageUrl && !loading && !error && (
        <div className={styles.imageBox}>
          <img src={imageUrl} alt="Generated" />
        </div>
      )}
    </div>
  );
};

export default ImgGen;
