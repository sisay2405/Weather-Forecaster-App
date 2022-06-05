import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Row, Col } from 'reactstrap';
import SevenDaysCard from './SevenDaysCard';
import SearchBar from './SearchBar';
import getLocation from '../utils/API';
import EachDay from './EachDay';

const HomeWrapper = styled.div`
  text-align: center;
  .daysList {
  }
  .EachDayView {
    margin-top: 200px;
  }
  .cityName{
    color:orange;
    padding-top:10px;
  }
`;

const DayWrapper = styled.div`
  display:flex;
  justify-content: center;
`;
const Home = () => {
  const [details, setDetails] = useState({});
  const [sevenDays, setSevenDays] = useState([]);
  const [locations, setLocations] = useState('Jacksonville, FL');
  const [oneDay, setOneDay] = useState(null);
  const { city_name: cityName, state_code: stateCode } = details;
  const getData = () => {
    getLocation(locations)
      .then((res) => {
        const { lat } = res.data[0];
        const { lon } = res.data[0];
        const weatherApiKey = process.env.REACT_APP_WEATHER_KEY;
        fetch(
          `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&days=7&key=${weatherApiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            setDetails(data);
            setOneDay(null);
            setSevenDays(data.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <HomeWrapper>
      <SearchBar
        getData={getData}
        locations={locations}
        setLocations={setLocations}
      />
      <div className="cityName"> {cityName} {stateCode}</div>
      <DayWrapper style={{ display: !oneDay ? 'flex' : 'none' }}>
        {sevenDays?.map((dayy) => (
          <div>
            <SevenDaysCard
              key={dayy}
              dayy={dayy}
              temp={dayy.temp}
              high={dayy.high_temp}
              low={dayy.low_temp}
              precip={dayy.precip}
              date={moment(dayy.valid_date).format('dddd DD MMMM')}
              selectDay={() => setOneDay(dayy)}
            />
          </div>
        ))}
      </DayWrapper>
      <div>
        {oneDay && (
          <>
            <EachDay
              temp={oneDay.temp}
              lowTemp={oneDay.low_temp}
              highTemp={oneDay.high_temp}
              feelhighTemp={oneDay.app_min_temp}
              feellowTemp={oneDay.app_max_temp}
              date={moment(oneDay.valid_date).format('dddd, MMM Do, YYYY:')}
              img={oneDay.weather.icon}
              description={oneDay.weather.description}
              precip={oneDay.precip}
              relativeHumidity={oneDay.rh}
              windSpeed={oneDay.wind_spd}
              windDirection={oneDay.wind_cdir_full}

            />
          </>
        ) }
      </div>
    </HomeWrapper>
  );
};

export default Home;
