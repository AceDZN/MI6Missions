import React, { useState, useEffect } from "react";
import styles from "./IsolatedCountries.module.css";

const groupBy = (objectArray, property) => {
  return objectArray.reduce(function(acc, obj) {
    let key = obj[property];
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
  }, {});
};

const IsolatedCountries = ({ missions }) => {
  const [isolatedCountries, setIsolatedCountries] = useState({});

  const setCountriesData = () => {
    const missionsByCountries = groupBy(missions, "country");
    const missionsByAgents = groupBy(missions, "agent");
    const countriesToIsolate = {};

    Object.keys(missionsByCountries).forEach(countryId => {
      const countryMissions = missionsByCountries[countryId];
      const country = {
        countryId,
        isolatedAgents: [],
        nonIsolatedAgents: []
      };

      countryMissions.reduce((acc, obj) => {
        const missionCount = missionsByAgents[obj.agent].length;
        const agent = obj.agent;

        if (missionCount === 1) country.isolatedAgents.push(agent);
        else country.nonIsolatedAgents.push(agent);
        acc.push(agent);
        return acc;
      }, []);

      countriesToIsolate[countryId] = country;
    });

    setIsolatedCountries(countriesToIsolate);
  };

  useEffect(setCountriesData, [missions]);

  const renderCountryIsolationLevel = (countryId, index) => {
    const { isolatedAgents, nonIsolatedAgents } = isolatedCountries[countryId];

    const isolatedAgentsCount = isolatedAgents.length;
    const nonIsolatedAgentsCount = nonIsolatedAgents.length;

    return (
      <div className={styles.item} key={`${index}_${countryId}`}>
        {index + 1} - {countryId} has {isolatedAgentsCount} isolated agent
        {isolatedAgentsCount > 1 ? "s" : ""} ({isolatedAgents.join(", ")}) and{" "}
        {nonIsolatedAgentsCount} non-isolated agent
        {nonIsolatedAgentsCount > 1 ? "s" : ""} ({nonIsolatedAgents.join(", ")})
      </div>
    );
  };

  const sortByMostIsolated = (a, b) => {
    return (
      isolatedCountries[b].isolatedAgents.length -
      isolatedCountries[a].isolatedAgents.length
    );
  };

  return (
    <div className={styles.container}>
      <h4>Most isolated country</h4>
      {Object.keys(isolatedCountries)
        .sort(sortByMostIsolated)
        .map(renderCountryIsolationLevel)}
    </div>
  );
};

export default IsolatedCountries;
