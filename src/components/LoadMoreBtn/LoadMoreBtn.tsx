import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button className={css.btn} type="button" onClick={onLoadMore}>
      <p>Load More</p>
    </button>
  );
};

export default LoadMoreBtn;