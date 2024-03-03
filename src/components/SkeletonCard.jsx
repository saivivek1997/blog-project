import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonCard.module.css";

function SkeletonCard() {
  return (
    <div className={styles["skeleton-card-container"]}>
      {Array(9)
        .fill()
        .map((_, index) => (
          <div className={styles["skeleton-container"]}>
            <h2 className={styles["skeleton-title"]}>
              <Skeleton height={30} width={`80%`} />
            </h2>
            <p className={styles["skeleton-author"]}>
              <span className="skeleton-heading">Author: </span>{" "}
              <Skeleton width={`60%`} />
            </p>
            <p className={styles["skeleton-published"]}>
              <span className="heading">Published At: </span> :{" "}
              <Skeleton width={`40%`} />
            </p>
            <div className={styles["skeleton-description"]}>
              <Skeleton count={3} />
            </div>
            <Skeleton className={styles["skeleton-image"]} height={200} />
            <div className={styles["skeleton-source"]}>
              Source: <Skeleton width={`50%`} />
            </div>
            <Skeleton width={`100px`} height={`20px`} />
          </div>
        ))}
    </div>
  );
}

export default SkeletonCard;
