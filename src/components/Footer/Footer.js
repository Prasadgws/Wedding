import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
 class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      
      
         <footer class="py-5 bg-dark d-flex flex-column footer">
         <div class="container footer-grids ">
           <p class="text-center text-white">Designed And Developed By &copy; Trixcel Business Solutions</p>
         </div>
       </footer>
    )
  }
}
export default withRouter(Footer);