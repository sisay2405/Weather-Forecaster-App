import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ReactAnimatedWeather from 'react-animated-weather';
import PropTypes from 'prop-types';
import SevenDaysCard from './SevenDaysCard';
import SearchBar from './SearchBar';
import GetLocation from '../utils/API';
import EachDay from './EachDay';
// import UserContext from '../utils/UserContext';

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
  const defaults = {
    icon: 'CLOUDY',
    color: 'goldenrod',
    size: 72,
    animate: true
  };

  const [locations, setLocations] = useState();
  const [user, setUser] = useState({
    locations: '',
    sevenDays: [],
    oneDay: '',
  });
  const { sevenDays, oneDay } = user;
  const getData = () => {
    GetLocation(locations)
      .then((res) => {
        const { lat } = res.data[0];
        const { lon } = res.data[0];
        const weatherApiKey = process.env.REACT_APP_WEATHER_KEY;
        fetch(
          `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&days=7&key=${weatherApiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            setUser({
              oneDay: null,
              sevenDays: data.data,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  // const inputChange = (e) => {
  //   const { locations, value } = e.target;
  //   setUser({ ...user, [locations]: value });
  // };
  return (
    <HomeWrapper>
      {/* <UserContext.Provider value={user}> */}
      <SearchBar
        getData={getData}
          // inputChange={inputChange}
        locations={locations}
        setLocations={setLocations}
      />
      {/* </UserContext.Provider> */}
      {/* <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      /> */}
      <DayWrapper style={{ display: !oneDay ? 'flex' : 'none' }}>
        {sevenDays?.map((dayy, i) => (
          <SevenDaysCard
            key={dayy.ts}
            dayy={dayy}
            temp={dayy.temp}
            high={dayy.high_temp}
            low={dayy.low_temp}
            precip={dayy.precip}
            date={moment(dayy.valid_date).format('dddd')}
            selectDay={() => setUser({ ...user, oneDay: dayy })}
          />
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
ReactAnimatedWeather.defaultProps = {
  animate: true,
  size: 64,
  color: 'black'
};
ReactAnimatedWeather.propTypes = {
  icon: PropTypes.oneOf([
    'CLOUDY',
  ]).isRequired,
  animate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default Home;
