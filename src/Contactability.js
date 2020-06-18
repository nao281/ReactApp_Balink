import React , { useState } from "react";
import axios from 'axios';

import validate from "./ValidationRules"
import ItemForm from "./ItemForm";
import Modal from "./Modal";


const Contactability = ({ setForm, formData, navigation }) => {
  const { phone, email,optin } = formData;
  const {previous } = navigation;
  const [showModal,setShow] = useState(false);
  const headers = {"Content-Type": "application/json"	  };

 const hideModal = () => {
    setShow(false);
 }
const handleSubmit = async() => {
	try {
		console.log(formData);
		const send=formData;
		await axios.post('http://localhost:3001/submit',formData,{headers:headers}).then((res)=>{
			if(res.data.status==='200' && res.data.message==='ok'){
				setShow(true);
			}
		});
	} catch (e) {
		console.log(e);
		}
  
};
  return (
    <div className="form">
	 <Modal show={showModal} handleClose={hideModal}>
          <p>Your registration has been completed successfully</p>
        </Modal>
      <h3>Contactability </h3>
       <div>
	   <label className="label">Phone</label>
      <input 
        name="phone"
        value={phone}
        onChange={setForm}
      />
	  {validate(formData).phone && (
                    <p className="help">{validate(formData).phone}</p>
                  )}
	</div>
     <div>
	   <label className="label">Email</label>
      <input 
        name="email"
        value={email}
        onChange={setForm}
      />
	  {validate(formData).email && (
                    <p className="help">{validate(formData).email}</p>
                  )}
	</div>
	  <ItemForm label="Optin" name="optin" value={optin} onChange={setForm} />
      <div>
	    <button onClick={previous}>Previous</button>
        <button onClick={handleSubmit} id="main" disabled={validate(formData).email} >Submit</button>
		
      </div>
    </div>
  );
};

export default Contactability;
