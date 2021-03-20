import React, {Component} from 'react';
import { withRouter,Link} from 'react-router-dom';


import SelectSearch from 'react-select-search';

import Multistep from 'react-multistep';
import { Alert } from 'react-bootstrap';









 class ProfileForOne extends Component {

  constructor(props) {
    super(props);
    this.state = {

        imgSrc:{}
    }
  }


  componentDidMount() {
   
  }


  componentDidUpdate() {

  }
  Enter_Image = (e) =>{
    // Assuming only image
    if(window.FileReader) {
        var file  = e.target.files[0];
        var reader = new FileReader();
        if (file && file.type.match('image.*')) {
          reader.readAsDataURL(file);
        } else {
          alert('please choose image')
        }
        this.setState({
            imgSrc: [reader.result],
    })
       
    }
  
     
    // Would see a path?
    // TODO: concat files
  }
  

  render() {

	
		
	  
	   const heights = [
		{name: '4ft - 121 cm', value: '4ft - 121 cm'},
		{name: '4ft 1in - 124cm', value: '4ft 1in - 124cm'},
		{name: '4ft 2in - 127cm', value: '4ft 2in - 127cm'},
		{name: '4ft 3in - 127cm', value: '4ft 3in - 127cm'},
		

		 ];

		 const qualifications = [
			{name: 'Any Bachelors in Engineering / Computers', value: 'svAny Bachelors in Engineering / Computers'},
			{name: 'Any Bachelors in Arts / Science / Commerce', value: 'Any Bachelors in Arts / Science / Commerce'},
			{name: 'Any Masters in Management', value: 'Any Masters in Management'}
			 ];
const worksWith = [
{name: 'Government/Public Sector', value: 'Government/Public Sector'},
{name: 'Defense/Civil Services', value: 'Defense/Civil Services'},
{name: 'Business/Self Employed', value: 'Business/Self Employed'},
{name: 'Private Company', value: 'Private Company'},
{name: 'Not Working', value: 'Not Working'}
];
								 const worksAs = [
									{name: 'Aounting/Banking/Finance', value: 'Aounting/Banking/Finance'},
									{name: 'Banking professionl', value: 'Banking professionl'},
									{name: 'Finance Professional', value: 'Finance Professional'}
									 ];
									 

									 
									 
									 


					 
						 

  
    return (

		<div class="w3ls-list">
		<div class="container">
		<div>

		<div class="col-md-9 profiles-list-agileits">
		
			<div id="parentHorizontalTab" style={{"display": "block", "width": "100%", "margin": "0px"}}>
			
				<div class="resp-tabs-container hor_1 profile_for_container" style={{"border-color": "rgb(193, 193, 193)"}}>
					<h2 class="resp-accordion hor_1 " role="tab" aria-controls="hor_1_tab_item-0" style={{"background": "rgb(245, 245, 245)", "border-color": "rgb(193, 193, 193)"}}><span class="resp-arrow"></span>Bio and Picture</h2><div class="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-0">	
						<div class="w3_regular_search">
							<form action="#" method="post">	
		
                            <div class="form_but1">
								<label class="col-sm-5 control-label1" for="sex">Profile Picture : </label>
								<div class="col-sm-7 form_radios">
                                <input type="file" id="img" name="img" accept="image/*" accept="image/png, image/jpeg"onChange={(e) => this.Enter_Image(e)} />
								</div>
								<div class="clearfix"> </div>
                                <img src={this.state.imgSrc}></img>
							  </div>
							  
							  <div class="form_but1">
								<label class="col-sm-5 control-label1" for="sex">Bio : </label>
								<div class="col-sm-7 form_radios">
                                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Enter Bio" maxLength="250"></textarea>
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
export default withRouter(ProfileForOne);