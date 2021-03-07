import React from "react";



function SearchBtn(props) {
    return (
      <button 
        onClick={props.onClick} 
        className={`card-btn ${props["data-value"]}`} 
        data-value={props["data-value"]} 
      >Search</button>
    );
  }
  
  export default SearchBtn;