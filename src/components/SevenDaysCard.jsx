import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const EachDayWrapper = styled.div`
  margin: 12px 5px;
  border: 2px solid gray; 
  padding: 17px;
  .ValidDate {
    color: #00b5e2;
  }
  h3 {
    font-weight: 700;
  }
`;
// eslint-disable-next-line max-len
function SevenDaysCard({ selectedDay, setSelectedDay, isSelected, selectDay, dayy, date, temp, high, low }) {
  // console.log(dayy);
  const navigate = useNavigate();
  const displayHotel = (e) => {
    navigate(`/EachDay/${dayy.id}`);
    setSelectedDay(dayy);
  };

  return (
    <EachDayWrapper isSelected={isSelected} onClick={selectDay}>
      <div className="ValidDate">
        <strong>{date}</strong>
      </div>
      <p>
        <strong>
          {temp}
          <sup>o</sup>
        </strong>
      </p>
      <img src={`https://www.weatherbit.io/static/img/icons/${dayy.weather.icon}.png`} alt="https://www.weatherbit.io/static/img/icons/r01d.png" />
      {/* <p>
        {' '}
        <strong>Description</strong>:{dayy.weather.description}
      </p> */}
      <p>
        <strong>High</strong>:{high}
      </p>
      <p>
        <strong>Low</strong>:{low}
      </p>
      <p>
        {/* <strong>precip</strong>:{precip}% */}
      </p>
    </EachDayWrapper>
  );
}
SevenDaysCard.propTypes = {
  date: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  // precip: PropTypes.number.isRequired,
};
export default SevenDaysCard;
