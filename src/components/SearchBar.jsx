import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import ThemeContext from '../utils/ThemeContext';

const SearchBarWrapper = styled.header`
  display:block;
  justify-content: space-between;
  margin-top:10px;
  .searchLocation {
    text-align: center;
    color: orange;
    display: flex;
  }
  .searchLocationTitle{
    text-align: center;
    display: flex;
    font-size:25px;
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

const SearchBar = ({ getData, setLocations, locations }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <SearchBarWrapper className={`content ${theme === 'seven-days-Weather' ? 'content--seven-days-Weather-mode' : ''}`}>
      <form autoComplete="on" onSubmit={onSubmit}>
        <div className="WeatherSerach">
          <label htmlFor="header-search" className="searchLocationTitle" style={{ marginLeft: '29.5rem' }}>
            Weather Info For
            <div className="searchLocation" style={{ marginLeft: '.5rem' }}>  {locations} </div>
          </label>
          <input
            className="searchHotelinput"
            type="text"
            id="header-search"
            autoComplete="true"
            placeholder="Atlantic 32219 or Jacksonville Fl."
            onChange={(e) => setLocations(e.target.value)}
          />
          <button
            className="searchHotelButton"
            type="submit"
            disabled={!locations}
            onClick={toggleTheme}
          >
            Search
          </button>
        </div>
      </form>
    </SearchBarWrapper>
  );
};
// SearchBar.propTypes = {
//   getData: PropTypes.func.isRequired,
// };
export default SearchBar;
