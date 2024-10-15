import React from 'react'
import './Chart.css'
import audio from "../../assets/Audios/BAARISHEIN.mp3";
import { useState, useEffect, useRef } from 'react';

function Chart() {

  const [playingIndex, setPlayingIndex] = useState(null);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const audioPlayerRef = useRef(new Audio(audio));

  useEffect(() => {
    const audioElement = audioPlayerRef.current;

    const handleCanPlayThrough = () => {
      setIsAudioReady(true);
      console.log("Audio is ready to play");
    };

    const handleError = (e) => {
      console.error("Error loading audio:", e);
    };

    audioElement.addEventListener('canplaythrough', handleCanPlayThrough);
    audioElement.addEventListener('error', handleError);

    // Preload the audio
    audioElement.preload = 'auto';
    audioElement.load();

    return () => {
      audioElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      audioElement.removeEventListener('error', handleError);
    };
  }, []);

  const handlePlayPause = (index) => {
    if (!isAudioReady) {
      console.log("Audio is not ready yet");
      return;
    }

    if (playingIndex === index) {
      audioPlayerRef.current.pause();
      setPlayingIndex(null);
    } else {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
      
      const playPromise = audioPlayerRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio started playing");
            setPlayingIndex(index);
          })
          .catch(error => {
            console.error("Playback failed:", error);
          });
      }
    }
  };

  
  return (<>
    <div className='chart'>
      
      <div className="chart_top">

        <div className="leftchart">
         <h2>Monthly Top Chart</h2>
         <button className='chartbtn'>View All</button>
        </div>
        <div className="flexthechart">
        <div className="chart-left-1">

        {/* Chart 1 */}

        <div className="chart1">
        <div className='chart-img-1'>
          <img src="./Images/image-7.png" alt="" />
        </div>
        <div className="chart-detail">
          <div className="intro">
            <h3>Build Musicly</h3>
            <p>Awesome Song</p>
          </div>
          <div className="play-bar-1">
            <img  src={
                playingIndex === 1 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(1)} />
          </div>
          </div>
          </div>

          {/* Chart 2 */}

          <div className="chart2">
        <div className='chart-img-2'>
          <img src="./Images/image-5.png" alt="" />
        </div>
        <div className="chart-detail2">
          <div className="intro2">
            <h3>B
            love is blind</h3>
            <p>Play Boy</p>
          </div>
          <div className="play-bar-2">
            <img  src={
                playingIndex === 2 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(2)} />
          </div>
          </div>
          </div>

          {/* Chart 3 */}

          <div className="chart3">
        <div className='chart-img-3'>
          <img src="./Images/image-6.png" alt="" />
        </div>
        <div className="chart-detail3">
          <div className="intro3">
            <h3>About songs</h3>
            <p>Ray studio</p>
          </div>
          <div className="play-bar-3">
            <img  src={
                playingIndex === 3 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(3)} />
          </div>
          </div>
          </div>

          {/* Chart 4 */}

          <div className="chart4">
        <div className='chart-img-4'>
          <img src="./Images/image-14png.png" alt="" />
        </div>
        <div className="chart-detail4">
          <div className="intro4">
            <h3>Woo Albuu</h3>
            <p>Vitae studio</p>
          </div>
          <div className="play-bar-4">
            <img  src={
                playingIndex === 4 ? "./Svgs/pause-min.svg" : "../Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(4)} />
          </div>
          </div>
          </div>

          {/* Chart 5 */}

          <div className="chart5">
          <div className='chart-img-4'>
          <img src="./Images/image-15.png" alt="" />
        </div>
        <div className="chart-detail5">
          <div className="intro5">
            <h3>Ninja Silhouette</h3>
            <p>holly studio</p>
          </div>
          <div className="play-bar-5">
            <img src="./Svgs/play-arrow.svg" alt="" />
          </div>
          </div>
          </div>
          </div>

          <div className="chart-right-1">

            {/* Chart 6 */}

        <div className="chart6">
        <div className='chart-img-6'>
          <img src="./Images/image-15.png" alt="" />
        </div>
        <div className="chart-detail6">
          <div className="intro6">
            <h3>
            life of pie</h3>
            <p>holly studio</p>
          </div>
          <div className="play-bar-6">
            <img  src={
                playingIndex === 6 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(6)} />
          </div>
          </div>
          </div>

          {/* Chart 7 */}

          <div className="chart7">
        <div className='chart-img-7'>
          <img src="./Images/image-3.png" alt="" />
        </div>
        <div className="chart-detail7">
          <div className="intro7">
            <h3>Napa fashion</h3>
            <p>Music Go</p>
          </div>
          <div className="play-bar-7">
            <img  src={
                playingIndex === 7 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(7)} />
          </div>
          </div>
          </div>

          {/* Chart 8 */}

          <div className="chart8">
        <div className='chart-img-8'>
          <img src="./Images/image-16.png" alt="" />
        </div>
        <div className="chart-detail8">
          <div className="intro8">
            <h3>Something</h3>
            <p>Ray studio</p>
          </div>
          <div className="play-bar-8">
            <img  src={
                playingIndex === 8 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(8)}/>
          </div>
          </div>
          </div>

          {/* Chart 9 */}

          <div className="chart9">
        <div className='chart-img-9'>
          <img src="./Images/image-17.png" alt="" />
        </div>
        <div className="chart-detail9">
          <div className="intro9">
            <h3>Program songs</h3>
            <p>Olivia Rodrigo</p>
          </div>
          <div className="play-bar-9">
            <img  src={
                playingIndex === 9 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(9)} />
          </div>
          </div>
          </div>

          {/* Chart 10 */}

          <div className="chart10">
        <div className='chart-img-10'>
          <img src="./Images/image-6.png" alt="" />
        </div>
        <div className="chart-detail10">
          <div className="intro10">
            <h3>Happy Ninja</h3>
            <p>Ray studio</p>
          </div>
          <div className="play-bar-10">
            <img  src={
                playingIndex === 10 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(10)}/>
          </div>
          </div>
          </div>
          </div>

          </div>

          

          </div>

          {/* right sec  */}
          <div className="chart_top">

<div className="leftchart">
 <h2>Monthly Top Chart</h2>
 <button className='chartbtn'>View All</button>
</div>
<div className="flexthechart">
<div className="chart-left-1">

{/* Chart 1 */}

<div className="chart1">
<div className='chart-img-1'>
  <img src="./Images/image-7.png" alt="" />
</div>
<div className="chart-detail">
  <div className="intro">
  <h3>Build Musicly</h3>
  <p>Awesome Song</p>    
  </div>
  <div className="play-bar-1">
    <img  src={
                playingIndex === 11 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(11)}/>
  </div>
  </div>
  </div>

  {/* Chart 2 */}

  <div className="chart2">
<div className='chart-img-2'>
  <img src="./Images/image-5.png" alt="" />
</div>
<div className="chart-detail2">
  <div className="intro2">
  <h3>Love is Blind</h3>
    <p>Play Boy</p>    
  </div>
  <div className="play-bar-2">
    <img  src={
                playingIndex === 12 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(12)} />
  </div>
  </div>
  </div>

  {/* Chart 3 */}

  <div className="chart3">
<div className='chart-img-3'>
  <img src="./Images/image-6.png" alt="" />
</div>
<div className="chart-detail3">
  <div className="intro3">
  <h3>About Songs</h3>
    <p>Ray Studio</p>
  </div>
  <div className="play-bar-3">
    <img  src={
                playingIndex === 13 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(13)} />
  </div>
  </div>
  </div>

  {/* Chart 4 */}

  <div className="chart4">
<div className='chart-img-4'>
  <img src="./Images/image-14png.png" alt="" />
</div>
<div className="chart-detail4">
  <div className="intro4">
  <h3>Woo Albuu</h3>
  <p>AVitae Studio</p>
  </div>
  <div className="play-bar-4">
    <img  src={
                playingIndex === 14 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(14)}/>
  </div>
  </div>
  </div>

  {/* Chart 5 */}

  <div className="chart5">
<div className='chart-img-5'>
  <img src="./Images/image-15.png" alt="" />
</div>
<div className="chart-detail5">
  <div className="intro5">
  <h3>Ninja Silhouette</h3>
    <p>Holly Studio</p>
  </div>
  <div className="play-bar-5">
    <img  src={
                playingIndex === 15 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(15)}/>
  </div>
  </div>
  </div>
  </div>

  <div className="chart-right-1">

    {/* Chart 6 */}

<div className="chart6">
<div className='chart-img-6'>
  <img src="./Images/image-15.png" alt="" />
</div>
<div className="chart-detail6">
  <div className="intro6">
  <h3>Life of Pie</h3>
    <p>Holly Studio</p>
  </div>
  <div className="play-bar-6">
    <img  src={
                playingIndex === 16 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(16)}/>
  </div>
  </div>
  </div>

  {/* Chart 7 */}

  <div className="chart7">
<div className='chart-img-7'>
  <img src="./Images/image-3.png" alt="" />
</div>
<div className="chart-detail7">
  <div className="intro7">
  <h3>Napa Fashion</h3>
    <p>Music Go</p>
  </div>
  <div className="play-bar-7">
    <img  src={
                playingIndex === 17 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(17)} />
  </div>
  </div>
  </div>

  {/* Chart 8 */}

  <div className="chart8">
<div className='chart-img-8'>
  <img src="./Images/image-16.png" alt="" />
</div>
<div className="chart-detail8">
  <div className="intro8">
  <h3>Something</h3>
  <p>Ray Studio</p>
  </div>
  <div className="play-bar-8">
    <img  src={
                playingIndex === 18 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(18)}/>
  </div>
  </div>
  </div>

  {/* Chart 9 */}

  <div className="chart9">
<div className='chart-img-9'>
  <img src="./Images/image-17.png" alt="" />
</div>
<div className="chart-detail9">
  <div className="intro9">
  <h3>Program Songs</h3>
  <p>Olivia Rodrigo</p>
  </div>
  <div className="play-bar-9">
    <img  src={
                playingIndex === 19 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(19)} />
  </div>
  </div>
  </div>

  {/* Chart 10 */}

  <div className="chart10">
<div className='chart-img-10'>
  <img src="./Images/image-6.png" alt="" />
</div>
<div className="chart-detail10">
  <div className="intro10">
  <h3>Happy Ninja</h3>
  <p>Ray Studio</p>
    
  </div>
  <div className="play-bar-10">
    <img  src={
                playingIndex === 20 ? "./Svgs/pause-min.svg" : "./Svgs/play-min.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(20)} />
  </div>
  </div>
  </div>
  </div>

  </div>

  

  </div>

          

      </div>


    
      </>
  )
}

export default Chart
