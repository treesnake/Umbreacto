import React, { Component } from 'react';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.state = {
      collapsed: true,
      navItems: []
    };
  }

  componentDidMount() {
    this.getMenuItems();
}

  getMenuItems()
  {
    fetch('https://localhost:44349/Umbraco/Api/Nav/GetNavItems')
        .then(response => response.json())
        .then(data => {
          this.setState({ navItems: data })
        })
  }

  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-red w3-card w3-left-align w3-large">
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
          {this.state.navItems.map(navItem => {
                        return (
                          <a key={navItem.DisplayId} href={`${navItem.Url}`} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">{navItem.Label}</a>
                          );
                    })}
        </div>

        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
          
          {this.state.navItems.map(navItem => {
                        return (
                          <a key={navItem.DisplayId} href={`${navItem.Url}`} className="w3-bar-item w3-button w3-padding-large">{navItem.Label}</a>
                          );
                    })}
        </div>
    </div>
    );
  }
}