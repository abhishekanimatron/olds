import axios from "axios";
import { useState, useEffect } from "react";
import "./Banner.css";

export default function Banner() {
  // QUOTE FETCH
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await axios.get(
          "https://api.quotable.io/random?maxLength=50"
        );
        const quoteFetched = response.data.content;
        const authorFetched = response.data.author;
        setQuote(quoteFetched);
        setAuthor(authorFetched);
      } catch (error) {
        console.log(error);
      }
    };
    getQuote();
  }, []);

  // REALTIME GREETING
  const date = new Date();
  const hour = date.getHours();

  // CONTENT
  return (
    <div className="banner-wrap">
      <h2 className="banner-subtitle">
        {hour >= 12
          ? hour >= 17
            ? "Good Evening"
            : "Good Afternoon"
          : "Good Morning"}
      </h2>
      <div id="quote">
        <p>{quote}</p>
        <span> - {author}</span>
      </div>
      <h3 className="banner-title">Here are Today's Top Headlines</h3>
    </div>
  );
}
