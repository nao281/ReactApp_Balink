import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { useState, useEffect } from 'react';

import ProgressBar from "./ProgressBar";
import Personal from "./Personal";
import Address from "./Address";
import Contactability from "./Contactability";


import "./style.css";

const steps = [
  { id: "personal" },
  { id: "address" },
  { id: "contactability" }
];

const defaultData = {
  firstName: "",
  lastName: "",
  title: "",
  country: "",
  city: "",
  street: "",
  zip: "",
  email: "",
  phone: "",
  optin:""
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
   
  switch (id) {
    case "personal":
      return <Personal {...props} />;
			
    case "address":
      return <Address {...props} />;
    case "contactability":
      return <Contactability {...props} />; 
    default:
      return null;
  }
};

export default MultiStepForm;
