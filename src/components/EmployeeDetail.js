import React from 'react';

function EmployeeDetail(props) {
    
     console.log(props.employees);
        // const employees = props.employees; 
        const results = props.employees.map((employee) =>
        <li><div>{employee.name.first}</div></li>
        
        );

    return(
        <div>
            {/* <h3>First Name: {props.name.first} Last Name: {props.name.last}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Nationality: {props.nat}</h3> */}
            <ul>{results}</ul>
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