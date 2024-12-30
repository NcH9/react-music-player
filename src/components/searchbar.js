"use client";

import React from "react";
import Player from "./player";
import Results from "./results";

class SearchBar extends React.Component {

    state = {
        query: "",
        result: [],
        error: "",
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.getSongs(this.state.query);

        console.log("Form submitted");
    }

    handleInputChange = (e) => {
        this.setState({ query: e.target.value });
    };

    getSongs = async (query) => {
        const url = `https://itunes.apple.com/search?term=${query}&limit=10`;
        const options = {
            method: 'GET',
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.results);
            this.setState({result: result.results}, () => {
                console.log(this.state.result);
            });
        } catch (e) {
            const error = e;
            this.setState({error: error});
            console.error(error);
        }
    }

    render() {
        
        return (
            <div className="flex_center">
                <div className="page"> 
                    <h1 className="flex_center">
                        <p className="gradient_text">Search music</p>
                    </h1>
                    <form onSubmit={this.handleSubmit} id="searchBarForm" className="grid1">
                        <div className="inputParent">
                            <input type="text" 
                                placeholder="Search..." 
                                value={this.state.query}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit">Search</button>
                    </form>
                    <Player />
                    <Results results={this.state.result} />
                </div>
            </div>
        );
    }
}

export default SearchBar;