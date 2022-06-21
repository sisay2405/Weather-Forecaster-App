/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ReactAnimatedWeather from 'react-animated-weather';
import PropTypes from 'prop-types';
import SevenDaysCard from './SevenDaysCard';
import SearchBar from './SearchBar';
import GetLocation from '../utils/API';
import EachDay from './EachDay';
import UserContext from '../utils/UserContext';

const HomeWrapper = styled.div`
  text-align: center;
  .daysList {
  }
  .EachDayView {
    margin-top: 200px;
  }
  .cityName1 {
    padding-top:10px;
    width:960px;
    color:orange;
    display: flex;
    justify-content: center;
  }
`;

const DayWrapper = styled.div`
  display:flex;
  justify-content: center;
`;
const Home = () => {
  const [locations, setLocations] = useState(null);
  const [details, setDetails] = useState({});
  const [user, setUser] = useState({
    sevenDays: [],
    oneDay: '',
  });
  const { sevenDays, oneDay } = user;
  const { city_name: cityName, state_code: stateCode } = details;
  const defaults = {
    icon: 'CLOUDY',
    color: 'goldenrod',
    size: 72,
    animate: true
  };
  const backtohome = () => {
    setUser({ ...user, oneDay: '' });
  };
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
            setDetails(data);
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
      <UserContext.Provider value={{ getData, backtohome, sevenDays, oneDay }}>
        <SearchBar
          locations={locations}
          setLocations={setLocations}
        />
        <div className="cityName1">
          <div> {cityName} {stateCode}</div>
          <ReactAnimatedWeather
            // className="cityName2"
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
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
              backtohome={backtohome}
            />
          </>
          ) }
        </div>
      </UserContext.Provider>
    </HomeWrapper>
  );
};

ReactAnimatedWeather.defaultProps = {
  animate: true,
};
ReactAnimatedWeather.propTypes = {
  icon: PropTypes.oneOf([
    'CLOUDY', 'CLO'
  ]).isRequired,
  animate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default Home;
