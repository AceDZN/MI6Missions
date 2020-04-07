import React from "react";
import styles from "./MissionsList.module.css";

function MissionsListHeader({ toggleSorting }) {
  return (
    <div className={styles.header}>
      <div
        className={styles.headerField}
        onClick={() => toggleSorting("agent")}
      >
        Agent ID
      </div>
      <div
        className={styles.headerField}
        onClick={() => toggleSorting("country")}
      >
        Country
      </div>
      <div
        className={styles.headerField}
        onClick={() => toggleSorting("address")}
      >
        Address
      </div>
      <div className={styles.headerField} onClick={() => toggleSorting("date")}>
        Date
      </div>
    </div>
  );
}

export default MissionsListHeader;
