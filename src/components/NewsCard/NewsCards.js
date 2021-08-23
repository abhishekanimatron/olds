import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../models/actions/useNews";
import altImage from "../../assets/alt-image.jpg";
import Skeleton from "react-loading-skeleton";

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
        news.map((n) => (
          <div className="news-card" key={n.title}>
            <div className="image-wrap">
              <img
                src={n.urlToImage || altImage}
                className="card-image news-card-image"
                alt={altImage}
              />
            </div>
            <div>
              <h5 className="card-title">{n.title}</h5>
              <p className="card-subtext">
                {n.content
                  ? n.content
                  : "We couldn't load the content of this webpage."}
              </p>
            </div>
          </div>
        ))
      )}
      <div style={{ marginBottom: "20vh" }} />
    </div>
  );
};
