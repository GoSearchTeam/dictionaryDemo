import React from 'react';

class WordNode extends React.Component {

    render() {
        const { word } = this.props;
        console.log(word)
        return (
            <div>
                <h1>{word.data.word}</h1>
                <p>{word.data.definition}</p>
            </div>
        )
    }
}

export default WordNode;