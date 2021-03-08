import React from 'react';
import "./EmployeeStyle.css";

function EmployeeDetail(props) {
    
    //  console.log(props.employees);
        // const employees = props.employees; 
        const people  = props.employees.map((employee) =>
        
        [<li>
            <div className="float-container">
                <div className="float-child"><p>{employee.name.first}</p></div> {""} 
                <div className="float-child"><p>{employee.name.last}</p></div> {""}
                <div className="float-child"><p>{employee.nat}</p></div> {""} 
                <div className="float-child"><p>{employee.gender.slice(0,1).toUpperCase()}</p></div>
            </div>
            <br></br>
        </li>,
        
        ]
        
        
        );

    return(
        <div >
            <div className="float-container">
            <div className="float-child"><p> First Name</p></div> {""}
            <div className="float-child"><p>Last Name</p></div> {""}
            <div className="float-child"><p>Nationality</p></div> {""}
            <div className="float-child"><p>Gender</p></div> {""}
            <ul className="lItem ">{people}</ul>   
            </div>        
        </div>
    );



}

export default EmployeeDetail;

// function NumberList(props) {
    //     const numbers = props.numbers;
    //     const listItems = numbers.map((number) =>
    //       <li>{number}</li>
    //     );
    //     return (
    //       <ul>{listItems}</ul>
    //     );
    //   }

//     const numbers = [1, 2, 3, 4, 5];
//       ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
//      );