import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import YoutubeSearchBox from '../../components/YoutubeSearchBox'
import Youtube from 'react-youtube'

export default function RadioPortal() {

    const [videoId, setVideoId] = useState('')

    function handleVideo(input: string) {
        console.log(input)
        setVideoId(input)
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

  return (
    <div>
        <Navbar />
        <YoutubeSearchBox onSubmit={handleVideo} />
        {videoId && <Youtube videoId={videoId} opts={opts} onEnd={() => setVideoId('dQw4w9WgXcQ')} />}
        <Footer />
    </div>
  )
}
