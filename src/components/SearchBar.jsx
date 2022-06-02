import React, { useState } from 'react';
import styled from 'styled-components';

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
  button {
    border-radius: 25px;
  }
`;

const SearchBar = ({ getData, locations, setLocations }) => {
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
            required
            placeholder="Atlantic blvd or 32219 or Jacksonville Fl."
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
          />
          <button className="searchHotelButton" type="submit">
            Search
          </button>
        </div>
      </form>
    </SearchBarWrapper>
  );
};
export default SearchBar;
