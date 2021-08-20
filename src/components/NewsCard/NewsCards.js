import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../models/actions/useNews";
import Loading from "../loading";
import "./NewsCard.css";
// import {options} from '../../models/actions/useNews'
export const NewsCards = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.newsList);
  const { loading, error, news } = newsList;
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className="card-grid bottom-collapse">
      {loading ? (
        <Loading />
      ) : error ? (
        error.message
      ) : (
        news.map((n) => (
          <div className="news-card" key={n.title}>
            <div className="image-wrap">
              <img
                src={n.urlToImage}
                className="card-image news-card-image"
                alt="somenews"
              />
            </div>
            <div>
              <h5 className="card-title">{n.title}</h5>
              <p className="card-subtext">{n.content}</p>
            </div>
          </div>
        ))
      )}
      <div style={{ marginBottom: "20vh" }} />
    </div>
  );
};
