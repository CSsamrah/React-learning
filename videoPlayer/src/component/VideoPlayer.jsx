import React from 'react'

function VideoPlayer({source}) {
  return (
    <video loop controls autostart="true" autoPlay muted
    className='w-auto h-auto border rounded-xl border-black'
    src={source}>
    </video>
  )
}

export default VideoPlayer