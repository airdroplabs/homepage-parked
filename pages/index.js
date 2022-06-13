import { useState, useRef } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import validator from "validator";
import axios from "axios";

const PLACEHOLDER = "Drop your email for info";

export default function Home() {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(PLACEHOLDER);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid) {
      axios.post("/api/email", { email });
      setEmail("");
      setEmailValid(false);
      setPlaceHolder("Speak soon!");
      inputRef.current.style.animation = "none";
    }
  };

  const validateInput = (e) => {
    var userInput = e.target.value;
    setPlaceHolder(PLACEHOLDER);
    setEmail(userInput);
    validator.isEmail(userInput) ? setEmailValid(true) : setEmailValid(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Airdrop Labs</title>
        <meta name="description" content="WAGMI." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>WAGMI.</h1>
        <h2>
          <a
            href="https://jobs.gusto.com/boards/airdrop-labs-de232069-6209-49e9-8597-63ac9d858075"
            target="_blank"
            className={styles.link}
            rel="noreferrer">
            [We're Hiring]
          </a>
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            onChange={validateInput}
            value={email}
            className={styles.input}
            ref={inputRef}
            placeholder={placeHolder}
            type="email"
          />
          <button
            type="submit"
            className={`${!emailValid && styles.input_hide} ${styles.button}`}>
            Contact Us
          </button>
        </form>
      </main>
    </div>
  );
}
