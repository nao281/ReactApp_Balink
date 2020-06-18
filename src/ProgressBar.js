import React from "react";
import './ProgressBar.css';
const ProgressBar = ({ navigation}) => {
	console.log(navigation);
    var step=1;
	 if(navigation=='address'){
		step=2;
	}
	else{
		step=3;
	}
	return (
		<div className="container-progressbar" >
			<ul className="progressbar">
				<li className="{step>1 ? 'active completed' : (step==1 ? 'active': '')}" >Personal Step</li>
				<li className="{step>2 ? 'active completed' : (step==2 ? 'active': '')}" >Address Step</li>
				<li className="{step==3 ? 'active completed' : (step==3 ? 'active': '')}" >Contactability Step</li>
			</ul>
		</div>
	);
};
	
export default  ProgressBar;