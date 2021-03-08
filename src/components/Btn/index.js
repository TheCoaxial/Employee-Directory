import React from "react";



function SearchBtn(props) {
    return (
      <button type="submit" 
        onClick={props.onClick} 
        className={`card-btn ${props["data-value"]}`} 
        data-value={props["data-value"]} 
        className="btn btn-info">
          Sort by Nationality</button>
    );
  }
  
  export default SearchBtn;