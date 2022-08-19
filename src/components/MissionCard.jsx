import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="board cardSize" data-testid="mission-card">
        <p className="missionName" data-testid="mission-name">{name}</p>
        <div>
          <p className="noMargin" data-testid="mission-year">{year}</p>
          <p className="noMargin" data-testid="mission-country">{country}</p>
          <p className="noMargin" data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
