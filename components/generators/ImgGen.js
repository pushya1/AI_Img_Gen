// ImgGen.js
import React, { useState } from "react";
import styles from "./ImgGen.module.css";

const ImgGen = () => {
  const [searchText, setSearchText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const jD = {text: searchText}

  const handleGenerateImage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jD),
      });

      var data = await response.json();
      var generatedImageUrl = data.imageUrl;
      console.log("frontend-link-recieved: ",generatedImageUrl)
      setImageUrl(generatedImageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
    // try {
    //   // Make a request to the Next.js API route
    //   const response = await axios.post("/api/generateImage", {
    //     searchText,
    //   });

    //   // Extract the image URL from the API response
    //   const generatedImageUrl = response.data.imageUrl;

    //   // Set the generated image URL in the state
    //   setImageUrl(generatedImageUrl);
    // } catch (error) {
    //   console.error("Error generating image:", error.message);
    // }
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
