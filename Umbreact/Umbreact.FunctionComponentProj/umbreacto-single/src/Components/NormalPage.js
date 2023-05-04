import React from 'react';
import ContentBlocks from './ContentBlocks.js';

function NormalPage(props) 
{
    return ( 
        <div>
        <header className="w3-container w3-red w3-center" style={{padding : "128px 16px"}}>
          <h1 className="w3-margin w3-jumbo">{props.headerText}</h1>
          <p className="w3-xlarge">{props.headerSubtext}</p>
        </header>
        <ContentBlocks blocks={props.blocks} />
      </div>
    );
}

export default NormalPage;