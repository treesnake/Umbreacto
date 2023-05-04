import React from 'react';
import FullWidthTextBlock from './FullWidthTextBlock.js';
import TextAndImage from './TextAndImage.js';
import CallToActionBlock from './CallToActionBlock.js';

function ContentBlocks(props) 
{
    return ( 
    <div>
        {props.blocks.map(block => {
            if(block.Alias == "fullWidthText")
            {
                return(
                <FullWidthTextBlock key={block.BlockDisplayId} 
                header={block.Props.find(element => element.Alias == "header").Value} 
                text={block.Props.find(element => element.Alias == "text").Value}/>
                );
            }
            if(block.Alias == "textAndImage")
            {
                return(
                <TextAndImage key={block.BlockDisplayId}
                header={block.Props.find(element => element.Alias == "header").Value}
                text={block.Props.find(element => element.Alias == "text").Value} 
                image={block.Props.find(element => element.Alias == "image").Value}
                />
                );
            }
            if(block.Alias == "singleCTA")
            {
                return(
                <CallToActionBlock key={block.BlockDisplayId}
                header={block.Props.find(element => element.Alias == "header").Value}
                blurb={block.Props.find(element => element.Alias == "blurb").Value}
                link={block.Props.find(element => element.Alias == "link").Value}
                image={block.Props.find(element => element.Alias == "image").Value}
                />
                );
            }
        })}
    </div> 
    );
}

export default ContentBlocks;