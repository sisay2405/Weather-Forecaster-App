import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import RefreshIcon from '@material-ui/icons/Refresh';
import mainLogo from '../Img/row8.png';

const EachDayWrapper = styled.header`
  margin-top:40px;
  .EachDayTitle{
    text-align: center;
    color:orange;
    display: flex;
    margin-bottom: 1px;
    justify-content: center;
  }
  .refershIcon{
    color: blue;
    margin:0;
  }
  .weatherList{
    margin-top: 50px;
  }
  .dayList{
    margin:1px;
  }
  .weatherImg{
    padding:10px;
  }
  .EachDayDetail {
    align-items: flex-start;
    background: #00B5E2;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-direction: row;
    margin: 2rem auto;
    margin-top: .1rem;
    width: 400px;
    img {
      margin-right: 1rem;
    }
    h1 {
      font-weight: 700;
    }
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

const EachDay = ({ date, temp, lowTemp, img,
  description, highTemp, feelhighTemp,
  feellowTemp, precip, relativeHumidity, windSpeed, windDirection, backtohome }) => {
  const [homepage, setHomepage] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setHomepage(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
      // <SpinnerLoader>
      //   <div className="spin"> </div>
      // </SpinnerLoader>
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
      ) : (
        <EachDayWrapper>{(!homepage) ? (
          <div>
            <div className="EachDayTitle"><h4>Forcast Details for {date}</h4>
            </div>
            <section className="EachDayDetail">
              <section className="weatherImg">
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
              <section className="weatherList">
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
            <h3 className="refershIcon"> <RefreshIcon onClick={() => { backtohome(); }} /></h3>
          </div>
        ) : ''}
        </EachDayWrapper>

      )}
    </>
  );
};

export default EachDay;
