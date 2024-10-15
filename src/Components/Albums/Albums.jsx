import React from 'react'
import './Albums.css'
import audio from "../../assets/Audios/BAARISHEIN.mp3";
import { useState, useEffect, useRef } from 'react';

function Albums() {

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

  return (
    <div className='album'>
      <div className='artist-btn'>
        <button className='buttn'>TOP ARTISTS</button>
      </div>
      <div className='album-list'>
      <h1>
        Recent Releases Albums
      </h1>
      </div>

      <div className='card'>

        <div className="card1">
            <img src="./Images/image-5.png" alt="" />
            <h3>love is blind</h3>
            <p >play boy</p>
            <img className='svg1' src={
                playingIndex === 1 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(1)}></img>
        </div>

        <div className="card2">
            <img src="./Images/image-3.png" alt="" />
            <h3>Napa Fashion</h3>
            <p >Music Go</p>
            <img className='svg2' src={
                playingIndex === 2 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(2)}></img>
        </div>

        <div className="card3">
            <img src="./Images/image-4.png" alt="" />
            <h3>Build Musicly</h3>
            <p >Awesome Song</p>
            <img className='svg3' src={
                playingIndex === 3 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(3)}></img>
        </div>

        <div className="card4">
            <img src="./Images/image-6.png" alt="" />
            <h3>About Songs</h3>
            <p >Ray Studio</p>
            <img className='svg4' src={
                playingIndex === 4 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(4)}></img>
        </div>
      </div>

    </div>
  )
}

export default Albums
