import React, { Component } from "react";
import ChartList from "../components/ChartList"


class ChartContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
}

componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({ songs: songs.feed.entry }))
      .catch(err => console.error);
  }

    render() {
      return (
        <div>
        <ChartList songs={ this.state.songs }/>
        </div>
      )
    }
  }


export default ChartContainer;
