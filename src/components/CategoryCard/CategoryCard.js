import "./CategoryCard.css";
import { Link } from "react-router-dom";

export default function CategoryCard() {
  return (
    <div style={{ overflowX: "hidden", marginRight: "0.5rem" }}>
      <div className="card-wrap container">
        <div className="row row-cols-2">
          <Link to="/business">
            <div className="category-card col">
              <div className="c-image-wrap">
                <img
                  src="/images/categories/b.jpg"
                  className="card-image category-c-image"
                  alt="some-category"
                />
              </div>
              <h3 className="card-title">Business</h3>
            </div>
          </Link>
          <Link to="/entertainment">
            <div className="category-card col">
              <div className="c-image-wrap">
                <img
                  src="/images/categories/e.jfif"
                  className="card-image category-c-image"
                  alt="some-category"
                />
              </div>
              <h3 className="card-title">Entertainment</h3>
            </div>
          </Link>
          <Link to="/health">
            <div className="category-card col">
              <div className="c-image-wrap">
                <img
                  src="/images/categories/he.jpg"
                  className="card-image category-c-image"
                  alt="some-category"
                />
              </div>
              <h3 className="card-title">Health</h3>
            </div>
          </Link>
          <Link to="/sports">
            <div className="category-card col">
              <div className="c-image-wrap">
                <img
                  src="/images/categories/spo.jfif"
                  className="card-image category-c-image"
                  alt="some-category"
                />
              </div>
              <h3 className="card-title">Sports</h3>
            </div>
          </Link>
          <Link to="/tech">
            <div className="category-card">
              <div className="c-image-wrap">
                <img
                  src="/images/categories/tech.jfif"
                  className="card-image category-c-image"
                  alt="some-category"
                />
              </div>
              <h3 className="card-title">Technology</h3>
            </div>
          </Link>
          <Link to="/science">
            <div className="category-card col">
              <div className="c-image-wrap">
                <img
                  src="/images/categories/sci.jpg"
                  className="card-image category-c-image"
                  alt="some-category"
                />
              </div>
              <h3 className="card-title">Science</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
