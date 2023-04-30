import React, { Component } from 'react';
import { ContentBlocks } from './ContentBlocks';

export class NormalPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageProps: [],
            headerText: "",
            headerSubtext: ""
        };
    }

    componentDidMount() {
        this.getPageProps();
    }

    getPageProps() {
        fetch('https://localhost:44349/Umbraco/Api/PageContent/GetPageContentByUrl?url=' + window.location.pathname)
        .then(response => response.json())
        .then(data => {
          this.setState({ pageProps: data });
          this.setState({ headerText: data.find(element => element.Alias == "headerText").Value });
          this.setState({ headerSubtext: data.find(element => element.Alias == "headerSubtext").Value });
        })
    }

  render() {
    return (
      <div>
        <header className="w3-container w3-red w3-center" style={{padding : "128px 16px"}}>
          <h1 className="w3-margin w3-jumbo">{this.state.headerText}</h1>
          <p className="w3-xlarge">{this.state.headerSubtext}</p>
        </header>
        <ContentBlocks/>
      </div>
    );
  }
}
