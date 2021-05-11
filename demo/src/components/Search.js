import React, { useState } from 'react'
import WordNode from './WordNode';
import { ENDPOINTS } from '../config'

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: '',
            words: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSetResult = this.handleSetResult.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value : event.target.value });
    }

    handleSetResult(res) {
        this.setState({ result: res });
    }

    async handleSubmit(event) {
        event.preventDefault();
        //alert('Word submitted: ' + this.state.value);
        this.setState({ words :
            (await fetch(ENDPOINTS.SEARCH, {
            method: 'POST',
            body: JSON.stringify({
              query: this.state.value,
              fields: ["word"],
              beginsWith: true
            })
          }).then(res => res.json() )).items
        })
    }

    //<input type="text" value={this.state.value} onChange={this.handleChange} />
    render() {
        return (
            <div>
                <div id="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Search Word:
                            <input id="input-box" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input id="search-button" type="submit" value="Search" />
                    </form>
                </div>
                <div id="dict">
                    {this.state.words.map(word => <WordNode word = {word}/>)}
                </div>
            </div>
            
            
        )
    }
}

export default Search