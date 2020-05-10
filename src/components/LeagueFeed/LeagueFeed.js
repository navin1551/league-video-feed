import React from "react";

import MedalPlayer from "medal-video-player";

import "./LeagueFeed.css";

class LeagueFeed extends React.Component {
  render() {
    console.log(this.props.league.contentObjects);
    const leagueVideos = this.props.data.map((video) => (
      <div className="medal-player-card" key={video.contentId}>
        <div className="title-area">
          <p id="title-span">{video.contentTitle}</p>
        </div>
        <div>
          <MedalPlayer
            content={video}
            game=""
            user=""
            videoOpts={{
              autoplay: true, // should the video autoplay?
              loop: true, // should the video loop?
              muted: true, // is the video muted by default?
              controls: true, // are the video controls enabled?
              embedded: true, // is this an embedded player? should we include all branding components and enable player.js events?
              retry: true, // if the video fails to load, for whatever reason, retry video.play() up to 10 times
            }}
          />
        </div>
        <div className="likes-views-area">
          <p id="likes">Likes: {video.likes}</p>
          <p id="views">Views: {video.views}</p>
        </div>
      </div>
    ));

    return <div className="videos-area">{leagueVideos}</div>;
  }
}

export default LeagueFeed;
