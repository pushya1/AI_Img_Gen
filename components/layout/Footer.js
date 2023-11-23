// Footer.js
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 pushya</p>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/pushya1"
            target="_blank"
            className={styles.iconLink}
          >
            <i className={`${styles.icon} fab fa-twitter`}>github</i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
