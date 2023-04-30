import React from 'react';

class CallToActionBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: props.stuff.find(element => element.Alias == "header").Value,
            blurb: props.stuff.find(element => element.Alias == "blurb").Value,
            image: props.stuff.find(element => element.Alias == "image").Value,
            link: props.stuff.find(element => element.Alias == "link").Value
        };
    }

    render() {        
        return (
          <div className="w3-container w3-sand w3-center w3-padding-64">
          <h1 className="w3-margin w3-xlarge">{this.state.header}</h1>
            <div className="w3-third w3-center"><p></p></div>
            <div className="w3-third w3-center">
              <div dangerouslySetInnerHTML={{__html: this.state.blurb}} />
              <a href={this.state.link}><img className="w3-image" src={this.state.image + "?width=300&height=300"} /></a> 
            </div>
            <div className="w3-third w3-center"><p></p></div>
        </div>
        );
    }
}

export { CallToActionBlock }; 