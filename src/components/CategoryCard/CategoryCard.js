import "./CategoryCard.css";

export default function CategoryCard() {
  return (
    <div style={{ overflowX: "hidden", marginRight: "0.5rem" }}>
      <div className="card-wrap container">
        <div className="row row-cols-2">
          <div className="category-card col">
            <img
              src="/images/categories/b.jpg"
              className="card-image"
              alt="some-category"
            />
            <h3 className="card-title">Business</h3>
          </div>
          <div className="category-card col">
            <img
              src="/images/categories/e.jfif"
              className="card-image"
              alt="some-category"
            />
            <h3 className="card-title">Entertainment</h3>
          </div>
          <div className="category-card col">
            <img
              src="/images/categories/he.jpg"
              className="card-image"
              alt="some-category"
            />
            <h3 className="card-title">Health</h3>
          </div>
          <div className="category-card col">
            <img
              src="/images/categories/spo.jfif"
              className="card-image"
              alt="some-category"
            />
            <h3 className="card-title">Sports</h3>
          </div>
          <div className="category-card">
            <img
              src="/images/categories/tech.jfif"
              className="card-image"
              alt="some-category"
            />
            <h3 className="card-title">Technology</h3>
          </div>
          <div className="category-card col">
            <img
              src="/images/categories/sci.jpg"
              className="card-image"
              alt="some-category"
            />
            <h3 className="card-title">Science</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
