import React from 'react';
import '../components/header-clouds.scss';

export default () => (
  <div className={['header-banner', 'clouds'].join(' ')}>
    <div className={['cloud', 'one'].join(' ')} data-speed="35000" />
    <div
      className={['cloud', 'two'].join(' ')}
      data-speed="45000"
      data-delay="15000"
    />{' '}
    <h1 className={'redstubble-logo'}>
      <a href="#animation">
        RE<span>D</span>STUBBLE
      </a>
    </h1>
    <div className={['cloud', 'three'].join(' ')} data-speed="40000" />
    <div
      className={['cloud', 'four'].join(' ')}
      data-speed="38000"
      data-delay="20000"
    />
  </div>
);
