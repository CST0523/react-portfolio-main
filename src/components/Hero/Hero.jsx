import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Siau Teng</h1>
        <p className={styles.description}>
          I'm a Year 3 Software Engineering Student at Sunway University.
          Reach out if you'd like to learn more!
        </p>
        
        {/* Wrapper for spacing between buttons */}
        <div className={styles.buttonContainer}>
          <a href="mailto:chewsiauteng@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="https://drive.google.com/file/d/1-65O9HfUmJ6e7d_6mY_9_msTYaqs7lGr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styles.cvBtn}>
            View CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/*<div className={styles.topBlur} />
      <div className={styles.bottomBlur} />*/}
    </section>
  );
};
