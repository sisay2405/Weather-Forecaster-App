import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

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
function SevenDaysCard({ dayy }) {
  // console.log(dayy);
  const navigate = useNavigate();
  const displayHotel = (e) => {
    navigate(`/EachDay/${dayy.id}`);
  };
  return (
    <EachDayWrapper onClick={displayHotel}>
      <div className="ValidDate">
        <strong>{moment(dayy.valid_date).format('dddd DD MMMM')}</strong>
      </div>
      <p>
        <strong>
          {dayy.temp}
          <sup>o</sup>
        </strong>
      </p>
      <img src={`https://www.weatherbit.io/static/img/icons/${dayy.weather.icon}.png`} alt="https://www.weatherbit.io/static/img/icons/r01d.png" />
      {/* <p>
        {' '}
        <strong>Description</strong>:{dayy.weather.description}
      </p> */}
      <p>
        <strong>High</strong>:{dayy.high_temp}
      </p>
      <p>
        <strong>Low</strong>:{dayy.low_temp}
      </p>
      <p>
        <strong>precip</strong>:{dayy.precip}%
      </p>
    </EachDayWrapper>
  );
}
export default SevenDaysCard;
