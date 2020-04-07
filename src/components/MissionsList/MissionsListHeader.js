import React from "react";
import styles from "./MissionsList.module.css";

function MissionsListHeader({ toggleDateSorting }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerField}>Agent ID</div>
      <div className={styles.headerField}>Country</div>
      <div className={styles.headerField}>Address</div>
      <div className={styles.headerField} onClick={toggleDateSorting}>
        Date
      </div>
    </div>
  );
}

export default MissionsListHeader;
