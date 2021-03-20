import React, {Component} from 'react';
import { withRouter,Link} from 'react-router-dom';
import CommonServices from "../../Services/commonService"


 class FindSolmate extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
    this.serviceObj = new CommonServices();
  }
  
  componentDidMount() {
   
  }
  componentDidUpdate() {

  }
  render() {
    return (
      <div>
      <div class="w3l_find-soulmate text-center">
		<h3>Find Your Soulmate</h3>
			<div class="container">
				<a class="scroll" href="#home">
					<div class="col-md-3 w3_soulgrid">
						<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						<h3>Sign Up</h3>
						<p>Signup for free and Upload your profile</p>
					</div>
				</a>
				<a class="scroll" href="#home">
					<div class="col-md-3 w3_soulgrid">
						<i class="fa fa-search" aria-hidden="true"></i>
						<h3>Search</h3>
						<p>Search for your right partner</p>
					</div>
				</a>
				<a class="scroll" href="#home">
					<div class="col-md-3 w3_soulgrid">
						<i class="fa fa-users" aria-hidden="true"></i>
						<h3>Connect</h3>
						<p>Connect your perfect Match</p>
					</div>
				</a>
			
				<div class="clearfix"> </div>
			</div>
	</div>
   </div>
   
    )
  }
}


export default withRouter(FindSolmate);
