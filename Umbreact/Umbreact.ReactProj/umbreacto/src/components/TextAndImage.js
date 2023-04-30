import React from 'react';

class TextAndImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: props.stuff.find(element => element.Alias == "header").Value,
            text: props.stuff.find(element => element.Alias == "text").Value,
            image: props.stuff.find(element => element.Alias == "image").Value
        };
    }

    render() {        
        return (
            <div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
      <h1>{this.state.header}</h1>
      
      <div dangerouslySetInnerHTML={{__html: this.state.text}} />
    </div>

    <div class="w3-third w3-center">
      <img class="w3-image" src={this.state.image  + "?width=600&height=800"} />
    </div>
  </div>
</div>
        );
    }
}

export { TextAndImage }; 