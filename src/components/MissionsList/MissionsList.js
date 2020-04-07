import React, { useState } from "react";
import MissionsListItem from "./MissionsListItem";
import MissionsListHeader from "./MissionsListHeader";
import MissionsListFooter from "./MissionsListFooter";
import styles from "./MissionsList.module.css";

const MissionsList = ({ missions }) => {
  const [sortByDateType, setDateSortingType] = useState("asc");

  const toggleDateSorting = () => {
    setDateSortingType(sortByDateType === "asc" ? "desc" : "asc");
  };

  const sortByMissionDate = (a, b) => {
    if (sortByDateType === "desc") {
      return new Date(b.date) - new Date(a.date);
    }
    return new Date(a.date) - new Date(b.date);
  };

  const missionMinToBase = missions.reduce(
    (acc, obj) => Math.min(obj.distanceFromBase, acc),
    [missions[0].distanceFromBase]
  );

  const missionMaxToBase = missions.reduce(
    (acc, obj) => Math.max(obj.distanceFromBase, acc),
    [missions[0].distanceFromBase]
  );

  return (
    <div className={`${styles.container} sort-${sortByDateType}`}>
      <MissionsListHeader toggleDateSorting={toggleDateSorting} />

      {missions.sort(sortByMissionDate).map(mission => {
        return (
          <MissionsListItem
            key={`${mission.agent}_${mission.country}`}
            mission={mission}
            closestToBase={
              Number(missionMinToBase) === Number(mission.distanceFromBase)
            }
            farthestFromBase={
              Number(missionMaxToBase) === Number(mission.distanceFromBase)
            }
          />
        );
      })}

      <MissionsListFooter missionsCount={missions.length} />
    </div>
  );
};

export default MissionsList;
