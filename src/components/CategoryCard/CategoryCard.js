import "./CategoryCard.css";

export default function CategoryCard() {
  return (
    <div style={{ overflowX: "hidden", marginRight: "0.5rem" }}>
      <div className="card-wrap container">
        <div class="row row-cols-2">
          <div className="category-card col">
            <div className="c-image-wrap">
              <img
                src="/images/categories/b.jpg"
                class="card-image category-c-image"
                alt="some-category"
              />
            </div>
            <h3 class="card-title">Business</h3>
          </div>
          <div className="category-card col">
            <div className="c-image-wrap">
              <img
                src="/images/categories/e.jfif"
                class="card-image category-c-image"
                alt="some-category"
              />
            </div>
            <h3 class="card-title">Entertainment</h3>
          </div>
          <div className="category-card col">
            <div className="c-image-wrap">
              <img
                src="/images/categories/he.jpg"
                class="card-image category-c-image"
                alt="some-category"
              />
            </div>
            <h3 class="card-title">Health</h3>
          </div>
          <div className="category-card col">
            <div className="c-image-wrap">
              <img
                src="/images/categories/spo.jfif"
                class="card-image category-c-image"
                alt="some-category"
              />
            </div>
            <h3 class="card-title">Sports</h3>
          </div>
          <div className="category-card">
            <div className="c-image-wrap">
              <img
                src="/images/categories/tech.jfif"
                class="card-image category-c-image"
                alt="some-category"
              />
            </div>
            <h3 class="card-title">Technology</h3>
          </div>
          <div className="category-card col">
            <div className="c-image-wrap">
              <img
                src="/images/categories/sci.jpg"
                class="card-image category-c-image"
                alt="some-category"
              />
            </div>
            <h3 class="card-title">Science</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
