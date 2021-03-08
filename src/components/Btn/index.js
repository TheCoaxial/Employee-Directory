import React from "react";



function SearchBtn(props) {
    return (
      <button 
        onClick={props.onClick} 
        className={`card-btn ${props["data-value"]}`} 
        data-value={props["data-value"]} 
      >Sort by Nationality</button>
    );
  }
  
  export default SearchBtn;