import React, { useState } from "react";
import MissionsListItem from "./MissionsListItem";
import MissionsListHeader from "./MissionsListHeader";
import MissionsListFooter from "./MissionsListFooter";
import styles from "./MissionsList.module.css";

const MissionsList = ({ missions }) => {
  const [sortType, setSortingType] = useState("date");
  const [sortDirection, setSortingDirection] = useState("asc");

  const toggleSorting = type => {
    if (type === sortType) {
      setSortingDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortingType(type);
      setSortingDirection("asc");
    }
  };

  const sortBySelectedType = (a, b) => {
    switch (sortType) {
      case "date":
        return new Date(a.date) - new Date(b.date);
      case "agent":
        return a[sortType] - b[sortType];
      default:
        return ("" + a[sortType]).localeCompare(b[sortType]);
    }
  };

  const getSortedMissions = () => {
    const sortedMissions = missions.sort(sortBySelectedType);
    if (sortDirection == "desc") {
      sortedMissions.reverse();
    }
    return sortedMissions;
  };

  const minDistanceToBase = missions.reduce(
    (acc, obj) => Math.min(obj.distanceFromBase, acc),
    [missions[0].distanceFromBase]
  );

  const maxDistanceToBase = missions.reduce(
    (acc, obj) => Math.max(obj.distanceFromBase, acc),
    [missions[0].distanceFromBase]
  );

  return (
    <div className={`${styles.container} sort-${sortDirection}`}>
      <MissionsListHeader toggleSorting={toggleSorting} />

      {getSortedMissions().map(mission => {
        return (
          <MissionsListItem
            key={`${mission.agent}_${mission.country}`}
            mission={mission}
            closestToBase={
              Number(minDistanceToBase) === Number(mission.distanceFromBase)
            }
            farthestFromBase={
              Number(maxDistanceToBase) === Number(mission.distanceFromBase)
            }
          />
        );
      })}

      <MissionsListFooter missionsCount={missions.length} />
    </div>
  );
};

export default MissionsList;
