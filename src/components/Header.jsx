import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

import logo from '../assets/aerolab-logo.svg';
import coin from '../assets/icons/coin.svg';
import { SpinnerCircularFixed } from 'spinners-react';

export function Header() {

  const { user, points, updatePoints, isLoading } = useContext(UserContext);

  const [isModalOn, setIsModalOn] = useState(false)
  const modal = isModalOn ? 'shown' : 'hidden'

  return (
    <div className="header ">
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
                      <SpinnerCircularFixed size={40} thickness={100} speed={180} color="rgba(255, 136, 0, 1)" secondaryColor="rgba(255, 136, 0, 0.24)" /> :
                      points
                  }
                </p>
                <img src={coin} alt="coin icon" />
              </div>

              {/* Modal */}
              <div className={`header__user-info__add-points ${modal}`}>
                Add points
                <div className='arrow-up'></div>
                <ul>
                  <li>
                    <button onClick={() => updatePoints(1000)} disabled={isLoading}>
                      {1000}
                      <img src={coin} alt="coin" />
                    </button>
                  </li>
                  <li >
                    <button onClick={() => updatePoints(5000)} disabled={isLoading}>
                      {5000}
                      <img src={coin} alt="coin" />
                    </button>
                  </li>
                  <li >
                    <button onClick={() => updatePoints(7500)} disabled={isLoading}>
                      {7500}
                      <img src={coin} alt="coin" />
                    </button>
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
