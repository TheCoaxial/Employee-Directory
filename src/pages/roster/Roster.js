import React, { Component } from 'react';
import searcher from "../../utils/API";
import EmployeeDetail from "../../components/EmployeeDetail";
import SearchForm from "../../components/SearchForm/index";
import SearchBtn from "../../components/Btn/index";



class Roster extends Component {
    state = {
        result: [],
        nat: "",
        alphabetical: false,
        fullList: []
    };



    componentDidMount() {
        searcher.search()
        .then(res => {
            console.log(this.state);
            this.setState({ result: res.data.results })
            this.setState({ fullList: res.data.results })
            console.log(this.state.fullList);
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ nat: event.target.value });
      };


    handleBtnClick = event => {
        event.preventDefault();
        let  result  = this.state.fullList;
        let nat = this.state.nat;

        function filterByNat(person){
            if (person.nat === nat){
                return true
            }
            else if(nat === ""){
                return true
            }
            else{ return false }
        }

        let sorted = result.filter(filterByNat)

        
        this.setState( this.state.result  = sorted)
        console.log(sorted)
    }

    EmployeeSearch = event => {
        this.setState({ result: this.state.fullList })
        console.log(this.state.fullList);

    }

    render() {
        return (
            <div>
                <SearchBtn
                    onClick = {this.EmployeeSearch}
                    
                />
                <SearchForm
                    handleFormSubmit = {this.handleBtnClick}
                    handleInputChange = {this.handleInputChange}
                    search = {this.state.nat}
                />
                <div>

                    {this.state.result ? (
                    <EmployeeDetail 
                        employees = {this.state.result}
                    />
                    ) :
                    (<h3>No results</h3>)}

                </div>



            </div>
        )
    }

}

export default Roster;