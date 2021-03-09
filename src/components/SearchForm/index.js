import React from "react";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="Nationality"><p>Name: </p></label>
          <input
            
            value={props.search}
            onChange={props.handleInputChange}
            
            list="nationalites"
            type="text"
            
            placeholder="Enter a name to search"
            id="nationalit"
            
            />
         
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-info">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;