import React, { Component } from "react";
import ChartList from "../components/ChartList"
import Song from "../components/Song"


class ChartContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
}

    render() {
      return (
        <div>
        <ChartList />
        </div>
      )
    }
  }


export default ChartContainer;
