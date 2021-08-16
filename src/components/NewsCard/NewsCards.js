import "./NewsCard.css";

export default function NewsCards() {
  return (
    <div className="card-grid bottom-collapse">
      <div className="news-card">
        <img src="/images/w.png" class="card-image" alt="somenews" />
        <div>
          <h5 class="card-title">
            Washington military base briefly locked down amid report of gunman
          </h5>
          <p class="card-subtext">
            US health regulators have authorized an extra dose of the Pfizer or
            Moderna Covid-19 vaccines in people with weakened immune systems to
            ...
          </p>
        </div>
      </div>
      <div className="news-card">
        <img src="/images/v.webp" class="card-image" alt="somenews" />
        <div>
          <h5 class="card-title">
            Vijay Mallya's Kingfisher House sold for just Rs 52 crore in 9th
            attempt
          </h5>
          <p class="card-subtext">
            The Kingfisher House was sold at just Rs 52 crore to a
            Hyderabad-based firm in the ninth attempt. The property initially
            has a base price of ...
          </p>
        </div>
      </div>
      <div className="news-card">
        <img src="/images/d.jpg" class="card-image" alt="somenews" />
        <div>
          <h5 class="card-title">
            Delhi: Partly cloudy skies today, rains predicted in coming week
          </h5>
          <p class="card-subtext">
            Going by the IMD's seven-day forecast, rainfall and thundershowers
            are a possibility on August 19 and August 20.
          </p>
        </div>
      </div>
      <div style={{ marginBottom: "15vh" }} />
    </div>
  );
}
