import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* import '//NavBar.css'; */

const NavBar = ({ background }) => {
  const brand =
    'https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/300162810_443399537804634_8002622939770125811_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7b9sVBs21swAX-JMzHm&_nc_oc=AQkjfMHqoRchrl-7CuIzPCKfqgGK67pTGh1va5LYzp8rAbvsfsQKwxexzcMs2I2nQu8&_nc_ht=scontent.faep22-1.fna&oh=00_AT-cXcyHGKQ-YqMmtyUzJYrU4slvmzWCciUz33N8GztFTA&oe=631C7C9D';

  return (
    <header className={`header background--${background}`}>

      <div className="header-container">
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
        </div>
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>

        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
