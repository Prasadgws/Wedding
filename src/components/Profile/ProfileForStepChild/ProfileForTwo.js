import React, {Component} from 'react';
import { withRouter,Link} from 'react-router-dom';


import SelectSearch from 'react-select-search';

import Multistep from 'react-multistep';










 class ProfileForTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  componentDidMount() {
   
  }


  componentDidUpdate() {

  }
  

  render() {

	
		
	  const cities = [
      {name: 'Nagpur', value: 'sv'},
      {name: 'Amravati', value: 'en'},
      {name: 'Satara', value: 'es'}
	   ];
	   



		 
			 const subCommunities = [
				{name: 'Kunabi', value: 'Kunabi'},
				{name: 'Maratha', value: 'Maratha'},
				
				 ];
				 const motherToung = [
					{name: 'Marathi', value: 'Marathi'},
					{name: 'Hindi', value: 'Hindi'},
					{name: 'Gujrati', value: 'Gujrati'}
					 ];
					 const diet = [
						{name: 'Veg', value: 'Veg'},
						{name: 'Ocasonally Non-Veg', value: 'Ocasonally Non-Veg'},
						{name: 'Eggetarian', value: 'Eggetarian'},
						{name: 'Jain', value: 'Jain'},
						{name: 'Vegan', value: 'Vegan'}
						 ];
						 const annualIncome = [
							{name: 'upto 1 Lakh yearly', value: 'upto 1 Lakh yearly'},
							{name: '1 Lakh to 2 Lakh yearly', value: '1 lakh to 2 Lakh yearly'},
							{name: '2 lakh - 4 Lakh yearly', value: '2 lakh - 4 Lakh yearly'},
							{name: '4 lakh - 7 Lakh yearly', value: '4 lakh - 7 Lakh yearly'},
							{name: '7 lakh - 10 Lakh yearly', value: '7 lakh - 10 Lakh yearly'},
							{name: '10 And Above Lakh yearly', value: '10 And Above Lakh yearly'},
							
							 ];
							 
									 

									 
									 
									 


					 
						 

  
    return (

		

		<div class="w3ls-list">
		<div class="container">
		<div>
		
 
 
		<div class="col-md-9 profiles-list-agileits">
		
			<div id="parentHorizontalTab" style={{"display": "block", "width": "100%", "margin": "0px"}}>
			
				<div class="resp-tabs-container hor_1 profile_for_container" style={{"border-color": "rgb(193, 193, 193)"}}>
					<h2 class="resp-accordion hor_1 " role="tab" aria-controls="hor_1_tab_item-0" style={{"background": "rgb(245, 245, 245)", "border-color": "rgb(193, 193, 193)"}}><span class="resp-arrow"></span>Profile </h2><div class="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-0">	
						<div class="w3_regular_search">
							<form action="#" method="post">	
							  
							
							
							  <div class="form_but1">
								<label class="col-sm-5 control-label1" for="sex">District / City : </label>
								<div className="col-sm-7 form_radios">
								
								<SelectSearch options={cities} class=""  search  name="language" placeholder="Choose your city" />

								</div>
								<div class="clearfix"> </div>
							  </div>
							  <div class="form_but1">
								<label class="col-sm-5 control-label1" for="sex">Diet : </label>
								<div class="col-sm-7 form_radios">
								<SelectSearch options={diet} class=""   value="sv" name="language" placeholder="Choose your diet type" />
								</div>
								<div class="clearfix"> </div>
							  </div>
							  <div class="form_but1">
								<label class="col-sm-5 control-label1" for="sex">Sub Community : </label>
								<div class="col-sm-7 form_radios">
								<SelectSearch options={subCommunities} class=""  search value="sv" name="language" placeholder="Choose your sub community" />
								</div>
								<div class="clearfix"> </div>
							  </div>
							  <div class="form_but1">
								<label class="col-sm-5 control-label1" for="sex">Mother Tongue : </label>
								<div class="col-sm-7 form_radios">
								<SelectSearch options={motherToung} class=""  search value="sv" name="language" placeholder="Choose your mother toung" />
								</div>
								<div class="clearfix"> </div>
							  </div>
							  <div class="form_but1">
								<label class="col-sm-5 control-label1" for="sex">Annual Income : </label>
								<div class="col-sm-7 form_radios">
								<SelectSearch options={annualIncome} class=""   value="sv" name="language" placeholder="Choose your annual income" />
								</div>
								<div class="clearfix"> </div>
							  </div>
							  
							  
							  <input type="submit" value="Save"/>
							</form>
						</div>
					</div>
					
					</div>
				</div>
			</div>
		</div>
		</div>

      
		
	<div class="clearfix"></div>
	</div>
	
        
    
    )
  }
}
export default withRouter(ProfileForTwo);