// domain.com/info.js
import React from "react";
import styles from "./info.module.css"; // Import the CSS module

const Info = () => {
  return (
    <div className={styles.websiteInfo}>
      <h1 className={styles.title}>Website Information</h1>
      <div className={styles.infoContainer}>
        <p>Website Name: AI Image Gen</p>
        <p>URL: https://www.babbleandjabber.com</p>
        <p>
          Description: A simple and use website for generating images using
          openai's DALLE-2 model.
        </p>
        <p>
          Cost of generating a image (DALLE-2): <b>0.02$</b>
        </p>
        <ul>
          <p>Technologies used:</p>
          <b>
            <li>React</li>
            <li>Nextjs</li>
          </b>
        </ul>
        <br />
        <p>Author: Pushya</p>
      </div>
    </div>
  );
};

export default Info;
