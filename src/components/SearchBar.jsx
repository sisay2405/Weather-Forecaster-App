/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setLocations } from '../store/homepageSlice';
import { toggleTheme } from '../store/themeSlice';

const SearchBarWrapper = styled.header`
  .searchLocationTitle {
    padding: 0.25rem 0;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    strong {
      color: orange;
    }
  }
  input {
    border-radius: 25px;
    padding: 0.5rem 2rem;
    width: 250px;
  }
  input:hover {
    border-color: red;
  }
  button:disabled {
    background: Lightblue; //DeepSkyBlue
    color: white;
  }
  button:enabled {
    color: white;
    background-color: rgb(17, 178, 236);
  }
  button {
    border-radius: 25px;
    cursor: pointer;
    margin-top: 0.5rem;
    padding: 0.5rem 2rem;
    width: 150px;
  }
`;

const SearchBar = ({ getData }) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.home.locations);
  const theme = useSelector((state) => state.theme.value);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(setLocations(''));
    getData();
  };
  return (
    <SearchBarWrapper
      className={`content ${
        theme === 'seven-days-Weather'
          ? 'content--seven-days-Weather-mode'
          : ''
      }`}
    >
      <form onSubmit={handelSubmit}>
        <label htmlFor="header-search">
          <input
            type="text"
            id="header-search"
            value={locations == null ? '' : locations}
            placeholder="Atlantic 32219 or Jacksonville Fl."
            onChange={(e) => dispatch(setLocations(e.target.value))}
          />
        </label>
        <button
          type="submit"
          disabled={!locations}
          onClick={() => dispatch(toggleTheme())}
        >
          Search
        </button>
      </form>
    </SearchBarWrapper>
  );
};
SearchBar.propTypes = {
  getData: PropTypes.func.isRequired,
};
export default SearchBar;
