import React from "react";
import validate from "./ValidationRules"
import ItemForm from "./ItemForm";

const Personal = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, title} = formData;

  const { next } = navigation;
  return (
    <div className="form">
     <h3>Personal</h3>
	 <div>
	   <label className="label">First Name</label>
      <input 
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
	  {validate(formData).firstname && (
                    <p className="help">{validate(formData).firstname}</p>
                  )}
	</div>
      <div>
	   <label className="label">Last Name</label>
       <input  
        name="lastName"
        value={lastName}
        onChange={setForm}/>
	  {validate(formData).lastname && (
				<p className="help ">{validate(formData).lastname}</p>
			  )}
      </div>
      <ItemForm
        label="Title"
        name="title"
        value={title}
        onChange={setForm}
      />
      <div>
        <button onClick={ next} disabled={validate(formData).firstname || validate(formData).lastname }>Next</button>
      </div>
    </div>
  );

  
}
export default Personal;
