import FooterTab from "../FooterTab/FooterTab";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsTechnology } from "../../models/actions/useNews";
import "./CategoriesStyle.css";
import Loading from "../loading";
export default function Tech() {
  const dispatch = useDispatch();
  const technologyList = useSelector((state) => state.technologyList);
  const { loading, error, technology } = technologyList;
 
  const mountedRef = useRef(true);
  useEffect(() => {
    //for each product change, scroll to top, reset counter
    window.scrollTo(0, 0);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    dispatch(getNewsTechnology());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Technology</h1>

      <div className="card-grid bottom-gap">
      {loading ? (
        <Loading />
      ) : error ? (
        error.message
      ) : (
        technology.map((n) => (
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