import React, { useState, useRef, useEffect } from "react";
import "./Playlist.css";
import audio from "../../assets/Audios/BAARISHEIN.mp3";

function Playlist() {
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
    <div className="playlist-features">
      <div className="playlist">
        <button className="playlistbtn">NEW PLAYLIST</button>
      </div>

      <div className="topplaylist">
        <h1>Weekly Top Playlists</h1>
        <button className="discover-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Discover More</span>
        </button>
      </div>

      <div className="flexplaybox">
        {/* Playbox1 */}
        <div className="playbox">
          <div className="playbox1">
            <img
              className="voice-recorder"
              src="./Svgs/voice-record.svg"
              alt=""
            />
            <img
              className="play-button-circle"
              src={
                playingIndex === 1 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(1)}
            />
          </div>

          <div className="details">
            <h3>Build Musicly</h3>
            <p>Awesome Song</p>

            <div className="click-btns">
              <button className="happy">Happy</button>
              <button className="mellow">Mellow</button>
              <button className="cool">Cool</button>
            </div>

            <div className="download-btn">
              <button className="download">Download: 2.4K</button>
            </div>
          </div>
        </div>

        {/* Playbox2 */}
        <div className="playbox">
          <div className="playbox1">
            <img
              className="voice-recorder"
              src="./Svgs/voice-record.svg"
              alt=""
            />
            <img
              className="play-button-circle"
              src={
                playingIndex === 2 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(2)}
            />
          </div>

          <div className="details">
            <h3>Life of Pie</h3>
            <p>Holly Studio</p>

            <div className="click-btns">
              <button className="happy">Happy</button>
              <button className="mellow">Mellow</button>
              <button className="cool">Cool</button>
            </div>

            <div className="download-btn">
              <button className="download">Download: 2.0K</button>
            </div>
          </div>
        </div>

        {/* Playbox3 */}
        <div className="playbox">
          <div className="playbox1">
            <img
              className="voice-recorder"
              src="./Svgs/voice-record.svg"
              alt=""
            />
            <img
              className="play-button-circle"
              src={
                playingIndex === 3 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(3)}
            />
          </div>

          <div className="details">
            <h3>Love is Blind</h3>
            <p>Play Boy</p>

            <div className="click-btns">
              <button className="happy">Happy</button>
              <button className="mellow">Mellow</button>
              <button className="cool">Cool</button>
            </div>

            <div className="download-btn">
              <button className="download">Download: 2.5K</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flexplaybox1">
        {/* Playbox4 */}
        <div className="playbox">
          <div className="playbox1">
            <img
              className="voice-recorder"
              src="./Svgs/voice-record.svg"
              alt=""
            />
            <img
              className="play-button-circle"
              src={
                playingIndex === 4 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(4)}
            />
          </div>

          <div className="details">
            <h3>Napa Fashion</h3>
            <p>Download: 1.4K</p>

            <div className="click-btns">
              <button className="happy">Happy</button>
              <button className="mellow">Mellow</button>
              <button className="cool">Cool</button>
            </div>

            <div className="download-btn">
              <button className="download">Download: 2.4K</button>
            </div>
          </div>
        </div>

        {/* Playbox5 */}
        <div className="playbox">
          <div className="playbox1">
            <img
              className="voice-recorder"
              src="./Svgs/voice-record.svg"
              alt=""
            />
            <img
              className="play-button-circle"
              src={
                playingIndex === 5 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(5)}
            />
          </div>

          <div className="details">
            <h3>About Songs</h3>
            <p>Ray Studio</p>

            <div className="click-btns">
              <button className="happy">Happy</button>
              <button className="mellow">Mellow</button>
              <button className="cool">Cool</button>
            </div>

            <div className="download-btn">
              <button className="download">Download: 1.2K</button>
            </div>
          </div>
        </div>

        {/* Playbox6 */}
        <div className="playbox">
          <div className="playbox1">
            <img
              className="voice-recorder"
              src="./Svgs/voice-record.svg"
              alt=""
            />
            <img
              className="play-button-circle"
              src={
                playingIndex === 6 ? "./Svgs/pause.svg" : "./Svgs/play.svg"
              }
              alt="Play/Pause Button"
              onClick={() => handlePlayPause(6)}
            />
          </div>

          <div className="details">
            <h3>Something</h3>
            <p>Ray Studio</p>

            <div className="click-btns">
              <button className="happy">Happy</button>
              <button className="mellow">Mellow</button>
              <button className="cool">Cool</button>
            </div>

            <div className="download-btn">
              <button className="download">Download: 2.1K</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
