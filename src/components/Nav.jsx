import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import PropTypes from 'prop-types';
import {withAuth} from './hoc/AuthContext';

export const navUrl = {
  MAP: {
    name: 'Карта',
    path: '/map/'
  },
  PROFILE: {
    name: 'Профиль',
    path: '/profile/'
  },
  LOGOUT: {
    name: 'Выйти',
    path: '/logout/'
  }
};

const NAVIGATION_ITEMS = Object.values(navUrl);

export const Nav = ({handleNavClick, navUrl}) => {
  return (
    <ErrorBoundary>
      <nav className="nav">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            href={item.path}
            className={'nav__item' + (navUrl === item.path ? ' nav__item--active' : '')}
            key={item.path}
            onClick={(e) => handleNavClick(e, item.path)}
            title={item.path}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </ErrorBoundary>
  );
};

// const PATHS = NAVIGATION_ITEMS.map((item) => item.path);
Nav.propTypes = {
  navUrl: PropTypes.string,
  handleFormSubmit: PropTypes.func
};

export const NavWithAuth = withAuth(Nav);
