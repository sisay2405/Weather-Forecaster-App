import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from 'styled-components';

const EachDayWrapper = styled.header`
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  text-align: center;
  box-shadow: 5px 5px #00B5E2;
  .referesh {
    width: 10%;
    margin: 0;
  }
  .dayList {
    font-family: cursive;
    margin: 1px;
  }
  img {
    width: 200px;
    margin-top: 10px;
    hight: 50px;
    text-align: center;
    border-radius: 4px;
  }
  .classTitle {
    font-family: cursive;
    color: #ff4500;
    margin: 1px;
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

const EachDay = ({ dayy }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { temp } = details;
  const navigate = useNavigate(); // //navigate to different page with Router useNavigate

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const HomePage = () => {
    navigate('/');
  };
  return (
    <>
      {loading ? (
        <SpinnerLoader>
          <div className="spin"> </div>
        </SpinnerLoader>
      ) : (
        <EachDayWrapper>
          <div className="referesh">  Home
          </div>
          <h1>Forcast Details for -----</h1>
          <h3 className="classTitle"> Temp: ---</h3>
          <img src="##" alt="##" />
          <p className="dayList">High:-| feelslike: </p>
          <p className="dayList">
            likelhood of Precipitation|Relative Humidty
          </p>
          <p className="dayList">Wind Speed:|Wind Direction:...</p>
        </EachDayWrapper>
      )}
    </>
  );
};

export default EachDay;
