import React from 'react';

function CallToActionBlock(props) 
{
    return ( 
        <div className="w3-container w3-sand w3-center w3-padding-64">
        <h1 className="w3-margin w3-xlarge">{props.header}</h1>
          <div className="w3-third w3-center"><p></p></div>
          <div className="w3-third w3-center">
            <div dangerouslySetInnerHTML={{__html: props.blurb}} />
            <a href={props.link}><img className="w3-image" src={props.image + "?width=300&height=300"} /></a> 
          </div>
          <div className="w3-third w3-center"><p></p></div>
      </div>
    );
}

export default CallToActionBlock;