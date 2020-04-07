import React from "react";
import styles from "./MissionsList.module.css";

const MissionsListItem = ({ mission, closestToBase, farthestFromBase }) => {
  const { agent, country, address, date } = mission;

  let distanceFromBaseClassName = "";

  if (closestToBase || farthestFromBase) {
    distanceFromBaseClassName = closestToBase
      ? styles.itemClosest
      : styles.itemFarthest;
  }

  return (
    <div className={`${styles.item} ${distanceFromBaseClassName}`}>
      <div className={styles.itemField}>{agent}</div>
      <div className={styles.itemField}>{country}</div>
      <div className={styles.itemField}>{address}</div>
      <div className={styles.itemField}>{date}</div>
    </div>
  );
};

export default MissionsListItem;
