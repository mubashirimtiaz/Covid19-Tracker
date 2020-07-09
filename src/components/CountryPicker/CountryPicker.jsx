import React from "react";
import { fetchCountry } from "../../api";
import { useEffect } from "react";
import { useState } from "react";
const CountryPicker = ({ handleCountyChange }) => {
  const [countries, setCountries] = useState([]);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setCheck(true);
    const getCountry = async () => {
      const data = await fetchCountry();
      setCountries(data);
    };
    getCountry();
  }, [check]);
  return countries.length ? (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 m-auto">
          <div className="form-group">
            <label htmlFor="country" className="font-weight-bold">
              Select Country
            </label>
            <select
              value=""
              className="form-control"
              id="country"
              onChange={(e) => handleCountyChange(e.target.value)}
            >
              {countries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center my-5">
      {/* <p className="display-4 mt-3">Loading...</p> */}
    </div>
  );
};

export default CountryPicker;
