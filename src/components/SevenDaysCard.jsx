import React, { useState } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { lighten } from '../utils/StyleMethods';

const WeatherInfo = styled.div`
  margin: 12px 5px;
  border: 2px solid gray; 
  border-top-right-radius: 70px;
  border-bottom-left-radius: 70px;
  // padding: 10px;
  padding: 1.25rem .75rem;
  :hover {
    ${lighten('#00B5E2', 0.8)}
    cursor: pointer;
    border-color: #00B5E2;
    }
  .temp{
    font-weight: 900;
  }
  img {
      width: 70px;
  }
  .ValidDate {
    color: #00b5e2;
  }
  h3 {
    font-weight: 700;
  }
`;
function SevenDaysCard({ selectDay, dayy, date, temp, high, low, precip }) {
  return (
    <Col>
      <div className="WeatherInfo">
        <WeatherInfo onClick={selectDay}>
          <section>
            <div className="ValidDate"><strong>{date}</strong></div>
            <img src={`https://www.weatherbit.io/static/img/icons/${dayy.weather.icon}.png`} alt={temp.toFixed(1)} />
            <p className="temp"><strong>{temp}<sup>o</sup></strong></p>
            <p><strong>High</strong>:{high.toFixed(1)}</p>
            <p><strong>Low</strong>:{low.toFixed(1)}</p>
            <p><strong>Precip</strong>:{precip}%</p>
          </section>
        </WeatherInfo>
      </div>
    </Col>
  );
}
SevenDaysCard.propTypes = {
  date: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  precip: PropTypes.number.isRequired,
};
export default SevenDaysCard;
