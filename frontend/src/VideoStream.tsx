import React, { Component, createRef, RefObject } from 'react';
import Hls from 'hls.js';

export interface VideoStreamProps {
  url: string
}

export default class VideoStream extends Component<VideoStreamProps> {

  private videoEl: RefObject<HTMLVideoElement>;

  constructor(props: any) {
    super(props);
    this.videoEl = createRef();
  }

  componentDidMount() {
    if (Hls.isSupported()) {
      // var video = document.getElementById('video');
      var hls = new Hls();
      // bind them together
      hls.attachMedia(this.videoEl.current as HTMLVideoElement);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        // console.log("video and hls.js are now bound together !");
        hls.loadSource("http://localhost:3001/public/master.m3u8");
        // hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        //   console.log("manifest loaded, found " + data.levels.length + " quality level");
        // });
      });
    }
  }

  render() {
    return (
      <video controls autoPlay ref={this.videoEl} />
    );
  }
}