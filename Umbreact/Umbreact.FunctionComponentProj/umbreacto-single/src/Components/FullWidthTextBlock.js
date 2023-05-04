import React from 'react';

function FullWidthTextBlock(props) 
{
    return ( 
        <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
                <h1 className="w3-margin w3-xlarge">{props.header}</h1>
                <div dangerouslySetInnerHTML={{__html: props.text}} />
            </div>
    );
}

export default FullWidthTextBlock;