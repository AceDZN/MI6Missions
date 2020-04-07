import React from "react";
import styles from "./MissionsList.module.css";

const MissionsListFooter = ({ missionsCount }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerField}>{missionsCount} missions</div>
    </div>
  );
};

export default MissionsListFooter;
