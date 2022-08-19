import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div className="missions" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solarSystem">
          {planets
            .map(({ name, image }, index) => (<PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ name }
              value={ index }
            />))}
        </div>
      </div>
    );
  }
}
