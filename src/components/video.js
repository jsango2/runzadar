import React from "react"
import styled from "styled-components"

const VideoSekcija = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(236, 236, 236, 0.327);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Youtube = styled.div`
  margin: 0 auto;
`

const Video = () => (
  <VideoSekcija>
    <Youtube
      data-sal="slide-right"
      data-sal-delay="300"
      data-sal-easing="easeOutCubic"
    >
      <iframe
        className="youtube"
        title="video"
        src="https://www.youtube.com/embed/zVtCyjDU_8U?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
        width="960"
        height="500"
      ></iframe>
    </Youtube>
  </VideoSekcija>
)

export default Video
