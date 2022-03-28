import { useState } from 'react';

import './hero.css';

import NovaIllustration from '../../assets/nova-illustration.svg';

const HeroComponent = () => {
  const [text, setText] = useState('Hello');

  const handleShowModal = () => {
    setText('Hi');
  };

  return (
    <div className='container'>
      <div className='hero-container'>
        <div className='hero-content'>
          <h2 className='hero-title'>Master Your Universe</h2>
          <p className='hero-description'>
            Nova is a beautifully designed administration panel for Laravel.
            Carefully crafted by the creators of Laravel to make you the most
            productive developer in the galaxy.
          </p>
          <div className='cta-container'>
            <button onClick={handleShowModal}>REGISTER NOW</button>
            <p>Read The Documentation</p>
          </div>
        </div>
        <div className='hero-image'>
          <img src={NovaIllustration} alt='illustration' />
        </div>
      </div>

      <div className='modal'>{text}</div>
    </div>
  );
};

export default HeroComponent;
