import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetText = `Planeta ${planetName}`;
    const classe = `imageSize ${planetName}`;
    return (
      <div className="boxSize" data-testid="planet-card">
        <img className={ classe } src={ planetImage } alt={ planetText } />
        <p className="App" data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
