import FooterTab from "../FooterTab/FooterTab";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef } from "react";
import "./CategoriesStyle.css";
export default function Business() {
  const mountedRef = useRef(true);
  useEffect(() => {
    //for each product change, scroll to top, reset counter
    window.scrollTo(0, 0);
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Business</h1>

      <div className="card-grid bottom-gap">
        <div className=" news-card">
          <div className="image-wrap">
            <img
              src="/images/w.png"
              className="card-image news-card-image"
              alt="somenews"
            />
          </div>
          <div>
            <h5 className="card-title">
              Washington military base briefly locked down amid report of gunman
            </h5>
            <p className="card-subtext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium eum error, cumque quos et sunt dolores voluptas impedit
              nam hic, odit iure soluta pariatur ratione labore nisi laboriosam,
              dolore reiciendis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, consectetur.
            </p>
          </div>
        </div>
        <div className=" news-card">
          <div className="image-wrap">
            <img
              src="/images/w.png"
              className="card-image news-card-image"
              alt="somenews"
            />
          </div>
          <div>
            <h5 className="card-title">
              Washington military base briefly locked down amid report of gunman
            </h5>
            <p className="card-subtext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium eum error, cumque quos et sunt dolores voluptas impedit
              nam hic, odit iure soluta pariatur ratione labore nisi laboriosam,
              dolore reiciendis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, consectetur.
            </p>
          </div>
        </div>
        <div className=" news-card">
          <div className="image-wrap">
            <img
              src="/images/w.png"
              className="card-image news-card-image"
              alt="somenews"
            />
          </div>
          <div>
            <h5 className="card-title">
              Washington military base briefly locked down amid report of gunman
            </h5>
            <p className="card-subtext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium eum error, cumque quos et sunt dolores voluptas impedit
              nam hic, odit iure soluta pariatur ratione labore nisi laboriosam,
              dolore reiciendis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, consectetur.
            </p>
          </div>
        </div>
        <div className=" news-card">
          <div className="image-wrap">
            <img
              src="/images/w.png"
              className="card-image news-card-image"
              alt="somenews"
            />
          </div>
          <div>
            <h5 className="card-title">
              Washington military base briefly locked down amid report of gunman
            </h5>
            <p className="card-subtext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium eum error, cumque quos et sunt dolores voluptas impedit
              nam hic, odit iure soluta pariatur ratione labore nisi laboriosam,
              dolore reiciendis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, consectetur.
            </p>
          </div>
        </div>
        <div className=" news-card">
          <div className="image-wrap">
            <img
              src="/images/w.png"
              className="card-image news-card-image"
              alt="somenews"
            />
          </div>
          <div>
            <h5 className="card-title">
              Washington military base briefly locked down amid report of gunman
            </h5>
            <p className="card-subtext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium eum error, cumque quos et sunt dolores voluptas impedit
              nam hic, odit iure soluta pariatur ratione labore nisi laboriosam,
              dolore reiciendis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, consectetur.
            </p>
          </div>
        </div>
        <div className=" news-card">
          <div className="image-wrap">
            <img
              src="/images/w.png"
              className="card-image news-card-image"
              alt="somenews"
            />
          </div>
          <div>
            <h5 className="card-title">
              Washington military base briefly locked down amid report of gunman
            </h5>
            <p className="card-subtext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium eum error, cumque quos et sunt dolores voluptas impedit
              nam hic, odit iure soluta pariatur ratione labore nisi laboriosam,
              dolore reiciendis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, consectetur.
            </p>
          </div>
        </div>
      </div>
      <FooterTab />
    </div>
  );
}
