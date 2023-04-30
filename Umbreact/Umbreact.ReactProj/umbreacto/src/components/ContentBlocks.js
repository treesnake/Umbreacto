import React from 'react';
import { FullWidthTextBlock } from './FullWidthTextBlock';
import { TextAndImage } from './TextAndImage';
import { CallToActionBlock } from './CallToActionBlock';

class ContentBlocks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentBlocks: []
        };
    }

    componentDidMount() {
        this.getContentBlocks();
    }

    getContentBlocks() {
        fetch('https://localhost:44349/Umbraco/Api/ContentBlock/GetContentBlocksByUrl?url=' + window.location.pathname)
        .then(response => response.json())
        .then(data => {
          this.setState({ contentBlocks: data })
        })
    }

    render() {        
        return (
            <div>
                    {this.state.contentBlocks.map(block => {
                        if(block.Alias == "fullWidthText")
                        {
                            return(
                            <FullWidthTextBlock key={block.BlockDisplayId} stuff={block.Props} />
                            );
                        }
                        if(block.Alias == "textAndImage")
                        {
                            return(
                            <TextAndImage key={block.BlockDisplayId} stuff={block.Props} />
                            );
                        }
                        if(block.Alias == "singleCTA")
                        {
                            return(
                            <CallToActionBlock key={block.BlockDisplayId} stuff={block.Props} />
                            );
                        }
                    })}
            </div>
        );
    }
}

export { ContentBlocks }; 