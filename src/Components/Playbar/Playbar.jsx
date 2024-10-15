import React, { useState, useRef, useEffect } from 'react';
import './Playbar.css';
import audio from '../../assets/Audios/BAARISHEIN.mp3';

function Playbar() {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the audio is playing
  const [currentTime, setCurrentTime] = useState('0:00'); // State to track current time of the audio
  const [duration, setDuration] = useState('0:00'); // State to track duration of the audio
  const [volume, setVolume] = useState(1); // State to track volume of the audio
  const audioPlayerRef = useRef(new Audio(audio)); // Ref to keep the same Audio object across renders

  // Set the duration of the audio when metadata is loaded
  useEffect(() => {
    audioPlayerRef.current.addEventListener('loadedmetadata', () => {
      const totalSeconds = Math.floor(audioPlayerRef.current.duration);
      setDuration(formatTime(totalSeconds));
    });

    // Update current time of the audio while playing
    audioPlayerRef.current.addEventListener('timeupdate', () => {
      const currentSeconds = Math.floor(audioPlayerRef.current.currentTime);
      setCurrentTime(formatTime(currentSeconds));
    });

    // Cleanup event listeners on unmount
    return () => {
      audioPlayerRef.current.removeEventListener('loadedmetadata', () => {});
      audioPlayerRef.current.removeEventListener('timeupdate', () => {});
    };
  }, []);

  // Function to handle playing/pausing the audio and toggling the icon
  const handlePlayPause = () => {
    if (isPlaying) {
      audioPlayerRef.current.pause(); // Pause the audio if it's playing
    } else {
      audioPlayerRef.current.play(); // Play the audio if it's paused
    }
    setIsPlaying(!isPlaying); // Toggle the play/pause state
  };

  // Function to handle volume change
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    audioPlayerRef.current.volume = newVolume; // Set the volume of the audio
    setVolume(newVolume); // Update the volume state
  };

  // Function to format time in mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  };

  return (
    <div className="playbar">
      <div className="singer-img">
        <img src="./Images/image-4.png" alt="" />
        <div className="singer-description">
          <h3>Build Musicly</h3>
          <p>Awesome Song</p>
        </div>
      </div>

      <div className="play-controls">
        <div className="time-display">
          <span>{currentTime}</span> / <span>{duration}</span>
        </div>

        <div className="play-btn">
          <img 
            src={isPlaying ? "./Svgs/pause.svg" : "./Svgs/play.svg"} 
            alt="Play/Pause Button" 
            onClick={handlePlayPause}
          />
        </div>

        <div className="volume-control">
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume} 
            onChange={handleVolumeChange} 
          />
        </div>
      </div>
    </div>
  );
}

export default Playbar;
