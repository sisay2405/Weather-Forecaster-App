import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useNavigate } from 'react-router';
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
  // const [data, setData] = useState('jacksonville, Fl');
  const [details, setDetails] = useState({});
  const [sevenDays, setSevenDays] = useState([]);
  const [locations, setLocations] = useState();
  const [selectedDay, setSelectedDay] = useState(null); const navigate = useNavigate();
  const [data, setData] = useState({
    // searchTerm: "",
    selectedDay: null,
    // location: "",
    // days: []
  });

  const { city_name: cityName, state_code: stateCode } = details;
  // const [selected, setSelected] = useState(null);
  // const { selectedDay } = data;
  const getData = () => {
    getLocation(locations)
      .then((res) => {
        // console.log(res.data);
        const { lat } = res.data[0];
        const { lon } = res.data[0];
        const weatherApiKey = process.env.REACT_APP_WEATHER_KEY;
        fetch(
          `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&days=7&key=${weatherApiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setDetails(data);
            setData({
              selectedDay: null,
            });
            setSevenDays(data.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  const HomePage = () => {
    navigate('/');
  };
  return (
    <HomeWrapper>
      <SearchBar
        getData={getData}
        locations={locations}
        setLocations={setLocations}
      />
      <div className="cityName"> {cityName} {stateCode}</div>
      <DayWrapper style={{ display: !selectedDay ? 'flex' : 'none' }}>
        {sevenDays?.map((dayy) => (
          <div>
            <SevenDaysCard
              key={dayy}
              dayy={dayy}
              // key={dayy.ts}
              temp={dayy.temp}
              high={dayy.high_temp}
              low={dayy.low_temp}
              precip={dayy.precip}
              date={moment(dayy.valid_date).format('dddd DD MMMM')}
              // isSelected={dayy === selectedDay}
              selectDay={() => setSelectedDay(dayy)}
            />
          </div>
        ))}
      </DayWrapper>
      <Row>
        {selectedDay && (
          <>
            <EachDay
              temp={selectedDay.temp}
              lowTemp={selectedDay.low_temp}
              highTemp={selectedDay.high_temp}
              feelhighTemp={selectedDay.app_min_temp}
              feellowTemp={selectedDay.app_max_temp}
              date={moment(selectedDay.valid_date).format('dddd, MMM Do, YYYY:')}
              img={selectedDay.weather.icon}
              description={selectedDay.weather.description}
              precip={selectedDay.precip}
              relativeHumidity={selectedDay.rh}
              windSpeed={selectedDay.wind_spd}
              windDirection={selectedDay.wind_cdir_full}

            />
          </>
        ) }
      </Row>
    </HomeWrapper>
  );
};

export default Home;
