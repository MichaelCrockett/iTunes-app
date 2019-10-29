import React, { Component } from "react";
import Song from "./Song";

class ChartList extends Component {
  render() {
    return (
      <div className="chart-list">
      <h2>Songs</h2>
      <Song />
      <Song />
      <Song />
      </div>
    );
  }
}

export default ChartList;
