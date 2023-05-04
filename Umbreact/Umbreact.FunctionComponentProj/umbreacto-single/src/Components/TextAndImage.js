import React from 'react';

function TextAndImage(props) 
{
    return ( 
        <div className="w3-row-padding w3-padding-64 w3-container">
            <div className="w3-content">
                <div className="w3-twothird">
                <h1>{props.header}</h1>
                
                <div dangerouslySetInnerHTML={{__html: props.text}} />
                </div>

                <div className="w3-third w3-center">
                <img className="w3-image" src={props.image  + "?width=600&height=800"} />
                </div>
            </div>
        </div>
    );
}

export default TextAndImage;