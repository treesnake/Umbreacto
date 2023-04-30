import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { NormalPage } from "./NormalPage";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <NormalPage />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}