import React from "react";
import CountUp from "react-countup";
import "./Card.css";
const Card = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;
  console.log(data);
  return Object.keys(data).length ? (
    <div className="container-fluid my-3">
      <div className="row card-deck">
        <div className="col-md-4 card p-0 infected ">
          <div className="card-header">
            <span>Infected</span>
          </div>
          <div className="card-body py-4">
            <div className="card-title text-muted">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </div>
            <div className="card-text">
              {new Date(lastUpdate).toDateString()}
            </div>
          </div>
          <div className="card-footer">
            <p>
              Number of active cases of <span>Covid-19</span>
            </p>
          </div>
        </div>
        <div className="col-md-4 card p-0 recovered">
          <div className="card-header">
            <span>Recovered</span>
          </div>
          <div className="card-body py-4">
            <div className="card-title text-muted">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </div>
            <div className="card-text">
              {new Date(lastUpdate).toDateString()}
            </div>
          </div>
          <div className="card-footer">
            <p>
              Number of recoveries from <span>Covid-19</span>
            </p>
          </div>
        </div>
        <div className="col-md-4 card p-0 deaths">
          <div className="card-header">
            <span>Deaths</span>
          </div>
          <div className="card-body py-4">
            <div className="card-title text-muted">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </div>
            <div className="card-text">
              {new Date(lastUpdate).toDateString()}
            </div>
          </div>
          <div className="card-footer">
            <p>
              Number of deaths caused by <span>Covid-19</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="loader"></div>
    </div>
  );
};

export default Card;
