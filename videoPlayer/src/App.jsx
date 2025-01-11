import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Radio from './component/Radio'
import VideoPlayer from './component/VideoPlayer'

function App() {
  const videos = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",

  }
  const videoOptions = Object.keys(videos)
  const [selectedOption, setSelectedOption] = useState(videoOptions[0])

  const handleChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <div className='bg-yellow-200 h-auto w-auto p-3 text-2xl font-bold font-mono flex flex-col gap-3'>
      <h1>video Player</h1>
      <div className='flex flex-row justify-center items-center'>
        {videoOptions.map((name, index) => (
          <Radio key={index}
            videoType={name}
            setOption={handleChange}
            selectedOption={selectedOption} />
        ))}

      </div>
      
        { selectedOption && (
          <VideoPlayer source={videos[selectedOption]} />

        )
}
    </div>
  )
}

export default App
