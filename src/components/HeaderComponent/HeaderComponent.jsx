import { Link } from 'react-router-dom';
import './header.css';

import NovaLogo from '../../assets/nova-logo.svg';

const HeaderComponent = () => {
  return (
    <div className='container'>
      <div className='header-container'>
        <Link to='/'>
          <img src={NovaLogo} alt='logo' />
        </Link>
        <div className='navigation-container'>
          <ul>
            <li className='navigation-list'>Releases</li>
            <Link to='/docs'>
              <li className='navigation-list'>Documentation</li>
            </Link>
            <li className='navigation-list'>Register</li>
            <li className='navigation-list'>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
