import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../App.css';

export default class Missions extends Component {
  render() {
    return (
      <div className="App missions" data-testid="missions">
        <Title headline="Missões" />
        <div className="missionCard">
          {missions
            .map(({ name, year, country, destination }) => (<MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ name }
            />))}
        </div>
      </div>
    );
  }
}
