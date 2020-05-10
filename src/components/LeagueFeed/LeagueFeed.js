import React from "react";

import MedalPlayer from "medal-video-player";

import "./LeagueFeed.css";

import ThumbsUpLike from "../../assets/like.png";
import Views from "../../assets/views.png";

class LeagueFeed extends React.Component {
  render() {
    const leagueVideos = this.props.data.map((video) => (
      <div className="medal-player-card" key={video.contentId}>
        <div className="title-area">
          <p id="title-span">-{video.contentTitle}</p>
        </div>
        <div>
          <MedalPlayer
            content={video}
            game=""
            user=""
            videoOpts={{
              autoplay: true,
              loop: true,
              muted: true,
              controls: true,
              embedded: true,
              retry: true,
            }}
          />
        </div>
        <div className="likes-views-area">
          <div className="likes-area">
            <img src={ThumbsUpLike} alt="thumbs up icon" id="thumbs-up-icon" />
            <p id="likes">{video.likes}</p>
          </div>
          <div className="views-area">
            <img src={Views} alt="views eye icon" id="views-icon" />
            <p id="views">{video.views}</p>
          </div>
        </div>
      </div>
    ));

    return <div className="videos-area">{leagueVideos}</div>;
  }
}

export default LeagueFeed;
