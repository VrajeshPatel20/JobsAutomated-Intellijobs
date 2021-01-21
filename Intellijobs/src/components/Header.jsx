import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header__container'>
      <div className='header__container-left'>
        <div className='logo'>Intellijobs</div>
      </div>
      <div className='header__container-right'>
        <ul>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <li className='list-item'>Home</li>
          </Link>
          <Link to='/appliedjobs' style={{ textDecoration: 'none', color: 'black' }}>
            <li className='list-item'>Applied Jobs</li>
          </Link>
          <Link to='/support' style={{ textDecoration: 'none', color: 'black' }}>
            <li className='list-item'>Support</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
