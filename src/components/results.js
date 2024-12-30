import React from "react";

class Results extends React.Component {
    convertMillisecondsToTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    playThisSong = (id) => {
        const audio = document.getElementById(id);
        audio.volume = 0.1;
        console.log(audio);
        if (!audio.paused) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    render() {
        let { results } = this.props;

        if (!results) {
            results = [
                artistName = "No results found",
                trackName = "No results found",
                previewUrl = ``,
                artworkUrl100 = ``,
            ];
        }

        const list = results.map((item, index) => (
            <div key={index} className="flex_center">
                <div className="result">
                    <div className="flex_start">
                        <img src={item.artworkUrl100} key={index}/>
                        <div className="grid1">
                            <div className="title">{item.trackName}</div>
                            <div className="artist">{item.artistName}</div>
                        </div>
                    </div>
                    <div className="flex_end">
                        <div className="flex_center">
                            <button 
                                onClick={() => {this.playThisSong(index)}}
                            >
                                <audio src={item.previewUrl} id={index} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Results;