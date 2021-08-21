import FooterTab from "../FooterTab/FooterTab";
import { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getNewsScience } from "../../models/actions/useNews";
import "./CategoriesStyle.css";
import Loading from "../loading";
export default function Science() {
  const dispatch = useDispatch();
  const scienceList = useSelector((state) => state.scienceList);
  const { loading, error, science } = scienceList;
  const mountedRef = useRef(true);
  useEffect(() => {
    //for each product change, scroll to top, reset counter
    window.scrollTo(0, 0);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    dispatch(getNewsScience());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Science</h1>

      <div className="card-grid bottom-gap">
      {loading ? (
        <Loading />
      ) : error ? (
        error.message
      ) : (
        science.map((n) => (
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
