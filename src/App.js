import './App.css';
import { PlayerControl } from './components/PlayerControl';
import { TrackList } from './components/TrackList';
import city_ambience from './assets/city_ambience.mp3';
import city_road from './assets/city_road.mp3';
import soft_piano from './assets/soft_piano.mp3';
import wind_chime from './assets/wind_chime.mp3';
import { useState } from 'react';
import { MusicContext } from './contexts/MusicContext';

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "City ambience",
        file: city_ambience
      },
      {
        name: "Soft piano",
        file: soft_piano
      },
      {
        name: "City road at night",
        file: city_road
      },
      {
        name: "Wind chime",
        file: wind_chime
      }
    ],
    currentTrackIndex: null,
    isPlaying: false
  })

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <p>music player</p>
        <TrackList />
        <PlayerControl />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
