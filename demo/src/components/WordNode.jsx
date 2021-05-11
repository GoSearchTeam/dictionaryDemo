import React from 'react';

class WordNode extends React.Component {

    render() {
        const { word } = this.props;
        console.log(word)
        return (
            <div>
                <p>{word.data.word}: {word.data.definition}</p>
            </div>
        )
    }
}

export default WordNode;