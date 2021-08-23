import FooterTab from "../FooterTab/FooterTab";
import Skeleton from "react-loading-skeleton";
import { useEffect, useRef } from "react";
import altImage from "../../assets/alt-image.jpg";
import Navbar from "../Navbar/Navbar";
import "./CategoriesStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getNewsEnt } from "../../models/actions/useNews";
export default function Entertainment() {
  const dispatch = useDispatch();
  const entertainmentList = useSelector((state) => state.entertainmentList);
  const { loading, error, entertainment } = entertainmentList;
  const mountedRef = useRef(true);
  useEffect(() => {
    //for each product change, scroll to top, reset counter
    window.scrollTo(0, 0);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    dispatch(getNewsEnt());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Entertainment</h1>

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
          entertainment.map((n) => (
            <div className=" news-card" key={n.title}>
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
          ))
        )}
      </div>
      <FooterTab />
    </div>
  );
}
