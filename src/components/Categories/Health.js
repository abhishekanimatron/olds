import FooterTab from "../FooterTab/FooterTab";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef } from "react";
import "./CategoriesStyle.css";
import Loading from "../loading";
import { useDispatch, useSelector } from "react-redux";
import { getNewsHealth } from "../../models/actions/useNews";
export default function Health() {
  const dispatch = useDispatch();
  const healthList = useSelector((state) => state.healthList);
  const { loading, error, health } = healthList;
  const mountedRef = useRef(true);
  useEffect(() => {
    //for each product change, scroll to top, reset counter
    window.scrollTo(0, 0);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    dispatch(getNewsHealth());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Health</h1>

      <div className="card-grid bottom-gap">
      {loading ? (
        <Loading />
      ) : error ? (
        error.message
      ) : (
        health.map((n) => (
        <div className=" news-card" key={n.title}>
          <div className="image-wrap">
            <img
              src={n.urlToImage}
              className="card-image news-card-image"
              alt="somenews"
            />
          </div>
          <div>
            <h5 className="card-title">
            {n.title}
            </h5>
            <p className="card-subtext">
            {n.content}
            </p>
          </div>
        </div>
        ))
      )}
      </div>
      <FooterTab />
    </div>
  );
}
