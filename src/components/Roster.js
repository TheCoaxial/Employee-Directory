import React, { Component } from 'react';
import searcher from "../utils/API";
import EmployeeDetail from "./EmployeeDetail";



class Roster extends Component {
    state = {
        result: [],
        alphabetical: false
    };

    componentDidMount() {
        searcher.search()
            .then(res => {
                console.log(res.data);
                this.setState({ result: res.data.results })
                console.log(this.state.result[0].name.first);
            })
            .catch(err => console.log(err));
    }

    handleSortChange = event => {

    }

    render() {
        return (
            <div>



                {this.state.result ? (
                <EmployeeDetail 
                    employees = {this.state.result}
                />
                ) :
                (<h3>No results</h3>)}



            </div>
        )
    }

}

export default Roster;