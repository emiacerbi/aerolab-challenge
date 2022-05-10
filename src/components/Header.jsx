import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

import logo from '../assets/aerolab-logo.svg';
import coin from '../assets/icons/coin.svg';
import { addPoints } from '../api/api';

export function Header() {

  const { user, updatePoints, isLoading } = useContext(UserContext);

  const [isModalOn, setIsModalOn] = useState(false)
  const modal = isModalOn ? 'shown' : 'hidden'

  return (
    <div className="header">
      <div className="container flex">

        <img className="header__logo" src={logo} alt="company logo" />
        {
          user
          && (
            <div className="header__user-info">
              <h3 className="header__user-info__name">{user.name}</h3>
              <div className={`header__user-info__coins  `}
                onClick={() => setIsModalOn(!isModalOn)}
              >
                <p>
                  {
                    isLoading ?
                      'Wait' :
                      user.points
                  }
                </p>
                <img src={coin} alt="coin icon" />
              </div>

              {/* Modal */}
              <div className={`header__user-info__add-points ${modal}`}>
                Add points
                <div className='arrow-up'></div>
                <ul>

                  <li onClick={() => updatePoints(1000)}>
                    {isLoading ? 'Wait' : 1000}
                    <img src={coin} alt="coin" />
                  </li>
                  <li onClick={() => updatePoints(5000)} >
                    {isLoading ? 'Wait' : 5000}
                    <img src={coin} alt="coin" />
                  </li>
                  <li onClick={() => updatePoints(7500)} >
                    {isLoading ? 'Wait' : 7500}
                    <img src={coin} alt="coin" />
                  </li>
                </ul>
              </div>

            </div>
          )
        }
      </div>
    </div>
  );
}
