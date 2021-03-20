import React, {Component} from 'react';
import { withRouter,Link} from 'react-router-dom';
 class FilterData extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
   
  }
  componentDidUpdate() {

  }
  

  render() {
  
    return (

	
		<div class="col-md-3 w3ls-aside">
			<h3>Search by Profile ID:</h3>
			<form action="#" method="get"> 
				<input class="text" type="text" name="profile_id" placeholder="Enter Profile ID" required=""/>
				<input type="submit" value="Search"/>
				<div class="clearfix"></div>
			</form>
			<h4>Filter Profiles by</h4>
			<div class="fltr-w3ls">
				<h5>Country</h5>
				<ul>
					<li><a href="#">Country1</a></li>
					<li><a href="#">Country2</a></li>
					<li><a href="#">Country3</a></li>
					<li><a href="#">Country4</a></li>
					<li><a href="#">Country5</a></li>
					<li><a href="#">Country6</a></li>
					<li><a href="#">Country7</a></li>
					<li><a href="#">Country8</a></li>
				</ul>
			</div>
			<div class="fltr-w3ls">
				<h5>Religion</h5>
				<ul>
					<li><a href="#">Religion1</a></li>
					<li><a href="#">Religion2</a></li>
					<li><a href="#">Religion3</a></li>
					<li><a href="#">Religion4</a></li>
					<li><a href="#">Religion5</a></li>
					<li><a href="#">Religion6</a></li>
					<li><a href="#">Religion7</a></li>
				</ul>
			</div>
			<div class="fltr-w3ls">
				<h5>Profession</h5>
				<ul>
					<li><a href="#">Profession1</a></li>
					<li><a href="#">Profession2</a></li>
					<li><a href="#">Profession3</a></li>
					<li><a href="#">Profession4</a></li>
					<li><a href="#">Profession5</a></li>
					<li><a href="#">Profession6</a></li>
				</ul>
			</div>
		</div>
	
        
    
    )
  }
}
export default withRouter(FilterData);