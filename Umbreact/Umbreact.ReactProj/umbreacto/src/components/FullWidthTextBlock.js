import React from 'react';

class FullWidthTextBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: props.stuff.find(element => element.Alias == "header").Value,
            text: props.stuff.find(element => element.Alias == "text").Value
        };
    }

    render() {        
        return (
            <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
                <h1 className="w3-margin w3-xlarge">{this.state.header}</h1>
                <div dangerouslySetInnerHTML={{__html: this.state.text}} />
            </div>
        );
    }
}

export { FullWidthTextBlock }; 