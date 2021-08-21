import FooterTab from "../FooterTab/FooterTab";
import { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import "./CategoriesStyle.css";
import Loading from "../loading";
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
        <Loading />
      ) : error ? (
        error.message
      ) : (
        entertainment.map((n) => (
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
