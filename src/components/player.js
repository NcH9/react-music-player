"use client"

// посреди экрана поверх всего

import React from "react";


class Player extends React.Component {

    state = {
        isPlaying: false,
        currentTrack: this.props.currentTrack || null,
    };

    render() {
        if (this.state.currentTrack == null) {
            return (
                <div></div>
            );
        }
        return (
            <div className="grid1">
                <div className="flex_center">
                    {/* <h1 className="gradient_text">Player</h1>    */}
                    <div className="player">
                        <div className="flex_center">
                            <img src={this.state.currentTrack.artworkUrl100} />
                        </div>
                        <div className="flex_center">
                            <div className="title">{this.state.currentTrack.trackName}</div>
                            <div className="artist">{this.state.currentTrack.artistName}</div>
                        </div>
                        <div className="flex_center">
                            <audio 
                                src={this.state.currentTrack.previewUrl} 
                                id="player" 
                                controls 
                                autoPlay 
                                volume="0.1"
                            />
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Player;