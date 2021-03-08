import React from "react";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="Nationality">Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="nationality"
            list="nationalites"
            type="text"
            className="form-control"
            placeholder="Enter a name to search"
            id="nationalit"
          />
         
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;