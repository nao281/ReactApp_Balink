import axios from 'axios';

export default function getCountries() {
	const headers = {
  "Content-Type": "application/json"
};
    return axios.get(`http://localhost:3001/countries`,{headers: headers});
	  
}