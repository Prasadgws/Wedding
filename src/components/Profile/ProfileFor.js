import React, {Component} from 'react';
import { withRouter,Link} from 'react-router-dom';
import FilterData from '../Profile/FilterData';
import SelectSearch from 'react-select-search';
import Multistep from 'react-multistep';
import ProfileForOne from '../Profile/ProfileForStepChild/ProfileForOne';
import ProfileForTwo from '../Profile/ProfileForStepChild/ProfileForTwo';
import ProfileForThree from '../Profile/ProfileForStepChild/ProfileForThree';
 class ProfileFor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stepOne:true,
      stepTwo:false,
      stepThree:false
    }
  }
  componentDidMount() {
   
  }
  componentDidUpdate() {

  }
  onSubmitData = (e) => {
    e.preventDefault();
    this.setState({
      stepOne: false,
      stepTwo:true
    });
  };
  render() {

	const steps = [
		{name: 'StepOne', component: <ProfileForOne/>},
		{name: 'StepTwo', component: <ProfileForTwo/>},
		{name: 'StepThree', component: <ProfileForThree/>}
		
	  ];
  
  
    return (

		

		<div class="w3ls-list">
		<div class="container">
		<div class="col-md-12 profiles-list-agileits MultiStep_Form_Main_Div">
		<Multistep showNavigation={true} class="stepBox" steps={steps}/>
    {this.state.stepOne ?( <p >PRASAD</p>):( <p>Nihar</p>)
    }
      <button  onClick={(e) => this.onSubmitData(e)}>Button</button>
		</div> 
      </div>

		
	<div class="clearfix"></div>
	</div>
	
        
    
    )
  }
}
export default withRouter(ProfileFor);