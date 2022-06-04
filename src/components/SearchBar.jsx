import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import getLocation from '../utils/API';

const SearchBarWrapper = styled.header`
  display:block;
  justify-content: space-between;
  margin-top:10px;
  .searchLocation {
    color: #00b5e2;
  }
  h3 {
    font-family: cursive;
    margin: 4.5px;
  }
  input {
    padding: .5rem;
    border-radius: 25px;
  }
  input:hover {
    border-color: red;
  }
  button:disabled{
    background: #00BFFF;  //DeepSkyBlue
    color:white;
    margin: 8px 0;
  }
  button:enabled {
    color:white;
    background: #8FBC8F; //DarkSeaGreen
    padding-top: 10px;
    margin: 8px 0;
  }
  button {
    border-radius: 25px;
  }
`;

const SearchBar = ({ getData, locations, setLocations }) => {
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [buttonColor, setButtonColor] = useState('red');
  // const newButtonColor = buttonColor === '#00B5E2' ? 'green' : '#00B5E2';

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <SearchBarWrapper>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
          <h3>
            {' '}
            Weather Info For{' '}
            <spam className="searchLocation">{locations}</spam>
          </h3>
        </label>
        <div className="WeatherSerach">
          <input
            className="searchHotelinput"
            type="text"
            autoComplete="true"
            // required
            placeholder="Atlantic 32219 or Jacksonville Fl."
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
          />
          <button
            className="searchHotelButton"
            type="submit"
            // style={{
            //   color: 'white',
            //   backgroundColor: isDisabled ? 'red' : buttonColor,
            // }}
            // onClick={() => setButtonColor(newButtonColor)}
            disabled={!locations}
          >
            Search
          </button>
        </div>
      </form>
    </SearchBarWrapper>
  );
};
SearchBar.propTypes = {
  getData: PropTypes.func.isRequired,
};
export default SearchBar;
