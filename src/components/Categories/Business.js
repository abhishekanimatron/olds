import FooterTab from "../FooterTab/FooterTab";
import Navbar from "../Navbar/Navbar";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { getNewsBusiness } from "../../models/actions/useNews";
import altImage from "../../assets/alt-image.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CategoriesStyle.css";
//animation
import Aos from "aos";
import "aos/dist/aos.css";
export default function Business() {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => state.businessList);
  const { loading, error, business } = businessList;

  const mountedRef = useRef(true);
  useEffect(() => {
    //for each product change, scroll to top, reset counter
    window.scrollTo(0, 0);

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    dispatch(getNewsBusiness());
    Aos.init({ duration: 1000 });
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Business</h1>

      <div className="card-grid bottom-gap">
        {loading ? (
          <div className="loader-wrap">
            <Skeleton
              className="skeleton-loader"
              count={6}
              width={25 * 16}
              height={20 * 16}
            />
          </div>
        ) : error ? (
          <>
            <div></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>It's a {error.message}.</h2>
              <h4>Check Your Connection & Try Again.</h4>
            </div>
            <div></div>
          </>
        ) : (
          business.map((n) => (
            <Link
              to={{ pathname: `${n.url}` }}
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className=" news-card" key={n.title} data-aos="fade-up">
                <div className="image-wrap">
                  <img
                    src={n.urlToImage || altImage}
                    className="card-image news-card-image"
                    alt={altImage}
                  />
                </div>
                <div>
                  <h5 className="card-title">{n.title}</h5>
                  <p className="card-subtext">{n.content}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <FooterTab />
    </div>
  );
}
