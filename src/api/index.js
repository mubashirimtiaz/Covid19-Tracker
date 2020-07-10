import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async (country) => {
  let changeableUrl = url;
  if (country && country !== "Global") {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log("error:", error);
  }
};

const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const filteredData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return filteredData;
  } catch (error) {
    console.log("error", error);
  }
};

const fetchCountry = async () => {
  const {
    data: { countries },
  } = await axios(`${url}/countries`);
  const filteredData = countries.map((country) => country.name);
  return filteredData;
};

export { fetchData, fetchDailyData, fetchCountry };
