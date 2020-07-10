import React, { Component } from "react";
import { Card, Chart, CountryPicker, Navbar, Footer } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    this.handleCountyChange();
  }

  handleCountyChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState((currState) => ({ data: fetchedData, country: country }));
    // console.log(country, fetchedData);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Navbar />
        <CountryPicker handleCountyChange={this.handleCountyChange} />
        <Card data={data} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}
