import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const TrackList = () => {
    const music = useMusicPlayer()
    return (
        <>
            <div>
                {music.trackList.map((track, index) => (
                    <div key={index}>
                        <div> Trackname: {track.name}</div>
                        <button onClick={() => music.playTrack(index)}>
                            {music.isPlaying && music.currentTrackIndex === index ? (
                                <FontAwesomeIcon icon = {faPause}/>
                            ) : (
                                <FontAwesomeIcon icon = {faPlay}/> 
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export {TrackList};