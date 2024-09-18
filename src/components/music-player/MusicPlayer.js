import React, { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null); //Initializes a reference to the <audio> element. useRef(null) creates an empty reference object that will be linked to the <audio> tag later
  const [isPlaying, setIsPLaying] = useState(false); //A state variable that holds whether the current track is playing or not (true/false)
  const [currentTrack, setCurrentTrack] = useState(0); //Stores the index of the currently selected track from the list of tracks
  const [trackProgress, setTrackProgress] = useState(0); //Stores the progress of the track, expressed as a percentage (from 0 to 100)

  useEffect(() => {
    if (isPlaying) {
      //If a track is playing, it starts an interval that updates trackProgress every second.
      const interval = setInterval(() => {
        //calculate the percentage of track progress,update the progress bar to visually represent the progress to the user by adjusting the width of the progress bar.
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      });

      //clearInterval: This function stops the interval when the track stops playing or the component unmounts.
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
    // Add more tracks as needed
  ];

  const handlePauseAndPlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPLaying(!isPlaying);
  };

  const handleSkipTrack = (getDirection) => {
    if (getDirection === "forward") {
      setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    } else if (getDirection === "backward") {
      setCurrentTrack(
        (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
      );
    }

    //ensures that the progress bar reflects the beginning of the newly selected track.
    setTrackProgress(0);
  };

  return (
    <div className="container">
      <div className="music-player">
        <h1>Music Player</h1>
        <h2>{tracks[currentTrack].title}</h2>
        <img
          src={tracks[currentTrack].image}
          alt={tracks[currentTrack].title}
        />
        <audio ref={audioRef} src={tracks[currentTrack].source} />
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${trackProgress}%`,
              backgroundColor: isPlaying ? "#3498db" : "#a43636",
              height: "25px",
            }}
          ></div>
        </div>
        <div className="track-controls">
          <button onClick={() => handleSkipTrack("backward")}>Backward</button>
          <button onClick={handlePauseAndPlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={() => handleSkipTrack("forward")}>Forward</button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
