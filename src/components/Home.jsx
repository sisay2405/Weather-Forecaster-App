import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SevenDaysCard from './SevenDaysCard';
import SearchBar from './SearchBar';
import getLocation from '../utils/API';

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
  const [data, setData] = useState('jacksonville, Fl');
  const [details, setDetails] = useState({});
  const [sevenDays, setSevenDays] = useState([]);
  const [locations, setLocations] = useState();
  const [selectedDay, setSelectedDay] = useState(null);
  const { city_name: cityName, state_code: stateCode } = details;

  const getData = () => {
    getLocation(locations)
      .then((res) => {
        console.log(res.data);
        const { lat } = res.data[0];
        const { lon } = res.data[0];
        fetch(
          `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&days=7&key=455326207f5d4f89886b9b4ce1c94a08`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setDetails(data);
            setSelectedDay(null);
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
      <DayWrapper>
        {sevenDays?.map((dayy) => (
          <div>
            <SevenDaysCard
              dayy={dayy}
              key={dayy.moonrise_ts}
              high={dayy.high_temp}
              isSelected={dayy === selectedDay}
              selectedDay={() => setSelectedDay({ selectedDay: dayy })}
            />
          </div>
        ))}
      </DayWrapper>
    </HomeWrapper>
  );
};

export default Home;
