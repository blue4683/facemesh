import React, { Component } from "react";
import { StreamManager } from "openvidu-browser";
import OpenViduVideoComponent from "./OvVideo";
import "../assets/css/UserVideo.css";

interface UserVideoProps {
  streamManager: StreamManager | undefined;
}

export default class UserVideoComponent extends Component<UserVideoProps> {
  getNicknameTag() {
    // Gets the nickName of the user
    const { streamManager } = this.props;
    if (streamManager && streamManager.stream.connection.data) {
      return JSON.parse(streamManager.stream.connection.data).clientData;
    }
    return "";
  }

  render() {
    const { streamManager } = this.props;
    return (
      <div>
        {streamManager !== undefined ? (
          <div className="streamcomponent">
            <OpenViduVideoComponent streamManager={streamManager} />
            <div>
              <p>{this.getNicknameTag()}</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
