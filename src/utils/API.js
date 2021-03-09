import axios from "axios";

const BASEURL = "https://randomuser.me/api/?";
const SEARCHPARAMS = "inc=gender,name,nat&results=50";



const searcher = {
    search: function() {
        let result = axios.get(BASEURL + SEARCHPARAMS );
        return result;
    }
};

export default searcher;