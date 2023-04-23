import React, { Component } from 'react';
import { ContentBlocks } from './ContentBlocks';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Henlo Fren</h1>
        <ContentBlocks/>
      </div>
    );
  }
}
