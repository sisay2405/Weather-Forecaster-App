/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import RefreshIcon from '@material-ui/icons/Refresh';
import { setSearch } from '../store/eachDaySlice';

import mainLogo from '../Img/row8.png';

const EachDayWrapper = styled.header`
  margin-top: 40px;
  .EachDayTitle {
    text-align: center;
    color: orange;
    display: flex;
    margin-bottom: 1px;
    justify-content: center;
  }
  .refershIcon {
    color: blue;
    margin: 0;
  }
  .weatherList {
    margin-top: 50px;
  }
  .dayList {
    margin: 1px;
  }
  .weatherImg {
    padding: 10px;
  }
  .EachDayDetail {
    align-items: flex-start;
    background: #00b5e2;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-direction: row;
    margin: 2rem auto;
    margin-top: 0.1rem;
    width: 400px;
    img {
      margin-right: 1rem;
    }
    h1 {
      font-weight: 700;
    }
  }
`;

const EachDay = ({
  date,
  temp,
  lowTemp,
  img,
  description,
  highTemp,
  feelhighTemp,
  feellowTemp,
  precip,
  relativeHumidity,
  windSpeed,
  windDirection,
  backtohome,
}) => {
  const dispatch = useDispatch();
  const { homepage, loading } = useSelector(
    (state) => state.search,
    shallowEqual,
  );
  useEffect(() => {
    dispatch(setSearch({ loading: true, homepage: false }));
    setTimeout(() => {
      dispatch(setSearch({ loading: false }));
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="coffee">
          <div className="coffee1">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee2">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee3">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee4">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee5">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee6">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee7">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee8">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
          <div className="coffee9">
            {' '}
            <img className="image11" src={mainLogo} alt="##" />
          </div>
        </div>
      ) : (
        <EachDayWrapper>
          {!homepage ? (
            <div>
              <div className="EachDayTitle">
                <h4>Forcast Details for {date}</h4>
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
                  <p className="dayList">
                    <strong>{description}</strong>
                  </p>
                </section>
                <section className="weatherList">
                  <p className="dayList">
                    <strong>High</strong>:{highTemp}
                    <sup>o</sup>|<strong>Feels like:</strong>
                    {feelhighTemp}
                    <sup>o</sup>
                  </p>
                  <p className="dayList">
                    {' '}
                    <strong>low</strong>:{lowTemp}
                    <sup>o</sup>| <strong>Feels like:</strong>
                    {feellowTemp}
                    <sup>o</sup>
                  </p>
                  <p className="dayList">
                    <strong>likelhood of Precipitation:</strong>
                    {precip}
                    <sup>o</sup>|<strong> Relative Humidty </strong>{' '}
                    {relativeHumidity}
                    <sup>o</sup>
                  </p>
                  <p className="dayList">
                    Wind Speed:{windSpeed}|{' '}
                    <strong>Wind Direction:</strong>
                    {windDirection}
                  </p>
                </section>
              </section>
              <h3 className="refershIcon">
                {' '}
                <RefreshIcon
                  onClick={() => {
                    backtohome();
                  }}
                />
              </h3>
            </div>
          ) : (
            ''
          )}
        </EachDayWrapper>
      )}
    </>
  );
};

export default EachDay;
