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
              href="https://github.com"
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
              href="https://github.com"
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
      </div>
      <h1 id="about-title">About Us</h1>
      <p id="about-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam
        ullam in exercitationem placeat corrupti quasi totam sunt voluptatum,
        debitis doloribus voluptas nostrum hic nobis. Quidem aspernatur cumque
        dolores alias exercitationem tempore, non nam cupiditate ex quam!
        <br />
        <br /> Qui, quasi sunt.
      </p>
    </div>
  );
}
