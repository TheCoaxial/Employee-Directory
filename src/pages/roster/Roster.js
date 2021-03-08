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
        let nat = this.state.nat.replace(/\s/g, "").toLowerCase();

        function filterByNat(person){
            let firstName = person.name.first.toLowerCase();
            let lastName = person.name.last.toLowerCase();

            if (firstName == nat || 
                lastName == nat  ||
                firstName+lastName == nat ) {
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

    sortByNat = event => {
        
        console.log(this.state.fullList);

        let sortedByNat = this.state.result.sort(function(a, b){
            if(a.nat < b.nat) { return -1; }
            if(a.nat > b.nat) { return 1; }
            return 0;
        })
        
        this.setState({ result: sortedByNat })

    }

    render() {
        return (
            <div>
                <SearchBtn
                    onClick = {this.sortByNat}
                    
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