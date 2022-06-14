import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RefreshIcon from '@material-ui/icons/Refresh';
import mainLogo from '../Img/row8.png';
import './Subscribe.css';

const EachDayWrapper = styled.header`
.image11{
    height: 30px;
    width: 10px;
  }
`;
const SpinnerLoader = styled.div`
  margin-bottom: 900px;
  width: 200px;
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  .spin::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #00B5E2;
    border-bottom-color: #87c91c;
    border-radius: 50%;
    content: '';
    height: 60px;
    width: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }
`;

// eslint-disable-next-line max-len
const EachDay = ({ date, temp, lowTemp, img, description, highTemp, feelhighTemp, feellowTemp, precip, relativeHumidity, windSpeed, windDirection, backtohome }) => {
  const [homepage, setHomepage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    setHomepage(false);
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerLoader>
          <div className="spin"> </div>
        </SpinnerLoader>
      ) : (
        <EachDayWrapper>{(!homepage) ? (
          <div>
            <div className="coffee">
              <div className="coffee1"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee2"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee3"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee4"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee5"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee6"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee7"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee8"> <img className="image11" src={mainLogo} alt="##" /></div>
              <div className="coffee9"> <img className="image11" src={mainLogo} alt="##" /></div>
            </div>
            <RefreshIcon
              onClick={() => {
                backtohome();
              }}
            />
            <h3 className="dayListTitle">Forcast Details for {date}</h3>
            <section className="profile">
              <section>
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${img}.png`}
                  alt="highTemp"
                />
                <h1 className="dayListTitle">
                  <strong>{temp}</strong>
                  <sup>o</sup>
                </h1>
                <p className="dayList"><strong>{description}</strong></p>
              </section>

              <section>
                <p className="dayList">
                  <strong>High</strong>:
                  {highTemp}<sup>o</sup>|<strong>Feels like:</strong>{feelhighTemp}<sup>o</sup>
                </p>
                <p className="dayList"> <strong>low</strong>:
                  {lowTemp}<sup>o</sup>| <strong>Feels like:</strong>{feellowTemp}<sup>o</sup>
                </p>
                <p className="dayList">
                  <strong>likelhood of Precipitation:</strong>
                  {precip}<sup>o</sup>|
                  <strong> Relative Humidty  </strong> {relativeHumidity}<sup>o</sup>
                </p>
                <p className="dayList">Wind Speed:{windSpeed}| <strong>Wind Direction:</strong>{windDirection}</p>
              </section>
            </section>
          </div>
        ) : ''}
        </EachDayWrapper>

      )}
    </>
  );
};

export default EachDay;
