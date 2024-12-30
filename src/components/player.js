"use client"

// посреди экрана поверх всего

import React from "react";


class Player extends React.Component {

    state = {
        isPlaying: false,
        currentTrack: null,
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
                    <h1 className="gradient_text">Player</h1>   
                </div> 
            </div>
        );
    }
}

export default Player;