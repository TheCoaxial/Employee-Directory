import React from "react";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="Nationality">Nationality:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="nationality"
            list="nationalites"
            type="text"
            className="form-control"
            placeholder="Type in a two letter nation code to begin"
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