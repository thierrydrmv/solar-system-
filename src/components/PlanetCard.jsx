import React, { Component } from 'react';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetText = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ planetText } />
      </div>
    );
  }
}
