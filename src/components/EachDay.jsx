import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from 'styled-components';
import RefreshIcon from '@material-ui/icons/Refresh';

const EachDayWrapper = styled.header`
  margin: auto;
  width: 50%;
  border: 3px solid green;
  text-align: center;
  box-shadow: 5px 5px #00b5e2;

  .referesh {
    color: #00b5e2;
  }
  .dayList {
    font-family: cursive;
    font:12px;
    margin: 1px;
  }
  .dayListTitle{
    font:60px;
  }
`;
const SpinnerLoader = styled.div`
  margin-top: 400px;
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
    border: solid 5px orange;
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
const EachDay = ({ date, temp, lowTemp, img, description, highTemp, feelhighTemp, feellowTemp, precip, relativeHumidity, windSpeed, windDirection }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { ts } = useParams();
  // const { date, low_temp: lowtemp } = details;
  const navigate = useNavigate(); // //navigate to different page with Router useNavigate
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // const HomePage = () => {
  //   navigate('/');
  // };
  const startAgainButton = () => {
    window.location.reload(false);
  };
  return (
    <>
      {loading ? (
        <SpinnerLoader>
          <div className="spin"> </div>
        </SpinnerLoader>
      ) : (
        <EachDayWrapper>
          <RefreshIcon
            className="referesh"
            onClick={startAgainButton}
          />
          <h3 className="dayListTitle">Forcast Details for {date}</h3>
          <h1 className="dayListTitle">
            {temp}
            <sup>o</sup>
          </h1>
          <img
            className="dddd"
            src={`https://www.weatherbit.io/static/img/icons/${img}.png`}
            alt="https://www.weatherbit.io/static/img/icons/r01d.png"
          />
          <p className="dayList">{description}</p>
          <p className="dayList">
            <strong>High</strong>:
            {highTemp}<sup>o</sup>|<strong>Feels like:</strong>{feelhighTemp}<sup>o</sup>
          </p>
          <p className="dayList"> <strong>low</strong>:
            {lowTemp}<sup>o</sup>| <strong>Feels like:</strong>{feellowTemp}<sup>o</sup>
          </p>
          <p className="dayList">High:-| feelslike: </p>
          <p className="dayList">
            <strong>likelhood of Precipitation:</strong>
            {precip}<sup>o</sup>|<strong> Relative Humidty</strong> {relativeHumidity}<sup>o</sup>
          </p>
          <p className="dayList">Wind Speed:{windSpeed}| <strong>Wind Direction:</strong>{windDirection}</p>
        </EachDayWrapper>
      )}
    </>
  );
};

export default EachDay;
