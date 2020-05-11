import React from "react";

import LeagueHeader from "./components/LeagueHeader/LeagueHeader";
import LeagueTitle from "./components/LeagueTitle/LeagueTitle";
import LeagueFeed from "./components/LeagueFeed/LeagueFeed";

import "./App.css";

import data from "./data.json";

class App extends React.Component {
  state = {
    dummyVideos: data,
    leagueVideos: [],
  };

  componentDidMount() {
    fetch("https://developers.medal.tv/v1/trending?categoryId=41&limit=25", {
      method: "GET",
      headers: {
        authorization: "pub_uCgPJzgypOYQc7WeseXiKrr3xiVQTPHY",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) =>
        this.setState({ leagueVideos: responseData.contentObjects })
      );
  }

  render() {
    console.log(this.state.leagueVideos);
    return (
      <div className="app">
        <LeagueHeader />
        <LeagueTitle />
        <LeagueFeed
          data={this.state.dummyVideos}
          league={this.state.leagueVideos}
        />
      </div>
    );
  }
}

export default App;

// const fetchData = () => {
//   return data;
// }

// function App() {
//   return (
//     <div className="App">
//       {
//         fetchData().map(item => {
//           return (
//             <MedalPlayer
//               content={item}
//               game=""
//               user=""
//               videoOpts={{
//                 autoplay : true, // should the video autoplay?
//                 loop : true, // should the video loop?
//                 muted : true, // is the video muted by default?
//                 controls : true, // are the video controls enabled?
//                 embedded : true, // is this an embedded player? should we include all branding components and enable player.js events?
//                 retry : true // if the video fails to load, for whatever reason, retry video.play() up to 10 times
//               }}
//             />
//           )
//         })
//       }
//     </div>
//   );
// }

// export default App;
