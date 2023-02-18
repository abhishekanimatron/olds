import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div id="about-wrap">
      <div id="people">
        <div className="person-wrap">
          <img
            src="/images/about/a.png"
            alt="person x"
            rel="noreferrer"
            className="person-image"
          />
          <p>Hrithik Goswami</p>
          <div id="socials">
            <a
              href="https://github.com/batman005"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <img src="/icons/about/github.svg" alt="github" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <img src="/icons/about/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="person-wrap">
          <img
            src="/images/about/b.jpg"
            alt="person y"
            rel="noreferrer"
            className="person-image"
          />
          <p>Abhishek Verma</p>
          <div id="socials">
            <a
              href="https://github.com/abhishekanimatron"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <img src="/icons/about/github.svg" alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/azrallex"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <img src="/icons/about/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <h1 id="about-title">About Us</h1>
      <p id="about-desc">
        This app is developed by both of us as a group project based on APIs.
        <br />
        <br />
        👩‍💻
        <br />
        We used these tech to make this app:
        <br />
        Bootstrap, React, Redux, Axios, CSS Node.js, Express, News API,
        OpenWeatherAPI
      </p>
      <span id="thanks-msg">🤗 Thanks for visiting. 🤗</span>
    </div>
  );
}
