import React from 'react';

function EmployeeDetail(props) {
    
     console.log(props.employees);
        // const employees = props.employees; 
        const people  = props.employees.map((employee) =>
        [<li><div>{employee.name.first}  {employee.name.last}</div><div>{employee.nat} {employee.gender}</div></li>,
         <div> </div> 
        ]
        
        
        );

    return(
        <div>
            <ul>{people}</ul>
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