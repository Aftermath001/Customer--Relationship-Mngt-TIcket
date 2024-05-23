import React from 'react';
import PropTypes from 'prop-types';
import './searchForm.css';

const SearchForm = ({ handleOnChange, str }) => {
  return (
    <form className="search-form">
      <div className="form-group row">
        <label htmlFor="searchStr" className="col-form-label col-sm-2">Search:</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="searchStr"
            id="searchStr"
            placeholder="Search...."
            className="form-control"
            onChange={handleOnChange}
            value={str}
          />
        </div>
      </div>
      <div className="text-right">
        <button type="submit" className="custom-button">Search</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

export default SearchForm;
