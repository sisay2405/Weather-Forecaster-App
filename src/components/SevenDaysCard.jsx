import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Col, Card, CardBody, Row } from 'reactstrap';
import { lighten } from '../utils/StyleMethods';

const WeatherInfo = styled.div`
  margin: 12px 5px;
  width: 150px;
  border: 2px solid gray; 
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
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
    font-weight: 900;
    :hover {
      ${lighten('#00B5E2', 0.8)}
      cursor: pointer;
      border-color: #00B5E2;
      }
  }
`;
function SevenDaysCard({ selectDay, dayy, date, temp, high, low, precip }) {
  return (
    <Row>
      <Col>
        <WeatherInfo onClick={selectDay}>
          <div className="ValidDate"><strong>{date}</strong></div>
          <img src={`https://www.weatherbit.io/static/img/icons/${dayy.weather.icon}.png`} alt={temp.toFixed(1)} />
          <p className="temp"><strong>{temp}<sup>o</sup></strong></p>
          <p><strong>High</strong>:{high.toFixed(1)}</p>
          <p><strong>Low</strong>:{low.toFixed(1)}</p>
          <p><strong>Precip</strong>:{precip.toFixed(1)}%</p>
        </WeatherInfo>
      </Col>
    </Row>
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
