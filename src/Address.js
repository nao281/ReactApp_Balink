import React, { useState, useEffect } from "react";


import ItemForm from "./ItemForm";
import StateDrop from "./StateDrop";
import getCountries from"./GetCountries";
import validate from "./ValidationRules"

const Address = ({ setForm, formData, navigation }) => {
  const { country, city, street} = formData;
  const [countries, setCountries] = useState(null );
  const { previous, next } = navigation;
  
	useEffect(() => {
		const getCountry = async () => {
			try {
				await getCountries().then((res)=>{
					var Listcountries = [];
					for (var i = 0; i < res.data.countries.length; i++) {
						
						Listcountries.push(res.data.countries[i].country);
					}
					setCountries(Listcountries);
				});
			} catch (e) {
				console.log(e);
				}
			};
		getCountry();
	}, [] );
	
  return (
    <div className="form">
      <h3>Address</h3>
	   <div>
	  <label className="label">Country</label>
      {countries!=null && <select
          name="country"
          value={country}
          onChange={setForm}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
	  </select>}
	    {validate(formData).country && (
				<p className="help ">{validate(formData).country}</p>
			  )}
	  </div>
      <ItemForm label="City" name="city" value={city} onChange={setForm} />
      <ItemForm label="Street" name="street" value={street} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next} disabled={validate(formData).country} >Next</button>
      </div>
    </div>
  );
};

export default Address;
