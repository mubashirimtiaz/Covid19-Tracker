import React from "react";
import { fetchDailyData } from "../../api";
import { useEffect } from "react";
import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    // setCheck(true);
    const getDailyData = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    getDailyData();
  }, []);
  console.log(confirmed, recovered, deaths, country);
  if (country === "Global") {
    country = undefined;
  }

  const lineChart = (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#ffc107",
            // backgroundColor: "rgba(255, 193, 5, 0.47)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#dc3545",
            backgroundColor: "rgba(220, 56, 72, 0.55)",
            fill: true,
          },
        ],
      }}
    />
  );
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#ffc107", "#28a745", "#dc3545"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return dailyData.length ? (
    <div className="container my-5">{country ? barChart : lineChart}</div>
  ) : (
    <div className="d-flex justify-content-center align-items-center my-5">
      {/* <p className="display-4 mt-3">Loading...</p> */}
    </div>
  );
};

export default Chart;
