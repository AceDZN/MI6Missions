const missions = [
  {
    agent: "007",
    country: "Brazil",
    address: "Avenida Vieira Souto 168 Ipanema, Rio de Janeiro",
    date: "Dec 17, 1995, 9:45:17 PM",
    distanceFromBase: "9286.23"
  },
  {
    agent: "005",
    country: "Poland",
    address: "Rynek Glowny 12, Krakow",
    date: "Apr 5, 2011, 5:05:12 PM",
    distanceFromBase: "1415.14"
  },
  {
    agent: "007",
    country: "Morocco",
    address: "27 Derb Lferrane, Marrakech",
    date: "Jan 1, 2001, 12:00:00 AM",
    distanceFromBase: "2301.16"
  },
  {
    agent: "005",
    country: "Brazil",
    address: "Rua Roberto Simonsen 122, Sao Paulo",
    date: "May 5, 1986, 8:40:23 AM",
    distanceFromBase: "9496.85"
  },
  {
    agent: "011",
    country: "Poland",
    address: "swietego Tomasza 35, Krakow",
    date: "Sep 7, 1997, 7:12:53 PM",
    distanceFromBase: "1415.57"
  },
  {
    agent: "003",
    country: "Morocco",
    address: "Rue Al-Aidi Ali Al-Maaroufi, Casablanca",
    date: "Aug 29, 2012, 10:17:05 AM",
    distanceFromBase: "2081.61"
  },
  {
    agent: "008",
    country: "Brazil",
    address: "Rua tamoana 418, tefe",
    date: "Nov 10, 2005, 1:25:13 PM",
    distanceFromBase: "8590.30"
  },
  {
    agent: "013",
    country: "Poland",
    address: "Zlota 9, Lublin",
    date: "Oct 17, 2002, 10:52:19 AM",
    distanceFromBase: "1569.36"
  },
  {
    agent: "002",
    country: "Morocco",
    address: "Riad Sultan 19, Tangier",
    date: "Jan 1, 2017, 5:00:00 PM",
    distanceFromBase: "1804.88"
  },
  {
    agent: "009",
    country: "Morocco",
    address: "atlas marina beach, agadir",
    date: "Dec 1, 2016, 9:21:21 PM",
    distanceFromBase: "2470.68"
  }
];

const getMissions = () => {
  const missionsInStorage = localStorage.getItem("mi6Missions");
  if (missionsInStorage) {
    return JSON.parse(missionsInStorage);
  } else {
    localStorage.setItem("mi6Missions", JSON.stringify(missions));
    return missions;
  }
};

export { getMissions };
