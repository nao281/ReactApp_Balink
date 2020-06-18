export default function validate(values) {
	//console.log('on est dans validate');
	let errors = {};
	const regMail = /\S+@\S+\.\S+/;
	const regPhone = /^[0]?[0-9]\d{9}$/;
  if (!values['email']) {
    errors.email = 'Email address is required';
  } else if (!regMail.test(values['email'])) {
    errors.email = 'Email address is invalid';
  }
 
  if (!values['firstName']) {
    errors.firstname = 'Firstname is required';
  } 
  if (!values['lastName']) {
    errors.lastname = 'Lastname is required';
  } 
    if (!values['country']) {
    errors.country = 'Country is required';
  }

  if (! regPhone.test(values['phone']) ) {
    errors.phone = 'Phone is invalid';
  } 
  return errors;
};