import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

import logo from '../assets/aerolab-logo.svg';
import coin from '../assets/icons/coin.svg';

export function Header() {

  const { user } = useContext(UserContext);

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
                <p>{user.points}</p>
                <img src={coin} alt="coin icon" />
              </div>

              {/* Modal */}
              <div className={`header__user-info__add-points ${modal}`}>
                Add points
                <div className='arrow-up'></div>
                <ul>

                  <li>
                    1000
                    <img src={coin} alt="coin" />
                  </li>
                  <li>
                    5000
                    <img src={coin} alt="coin" />
                  </li>
                  <li>
                    7500
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
