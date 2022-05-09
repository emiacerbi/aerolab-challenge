import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import logo from '../assets/aerolab-logo.svg';
import coin from '../assets/icons/coin.svg';

export function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <div className="container flex">

        <img className="header__logo" src={logo} alt="company logo" />
        {
          user
          && (
            <div className="header__user-info">
              <h3 className="header__user-info__name">{user.name}</h3>
              <div className="header__user-info__coins">
                <p>{user.points}</p>
                <img src={coin} alt="coin icon" />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
