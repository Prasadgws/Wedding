import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
 class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      
      <div className="container-fluid Below_Menu_Comp">
        <div className="row">
          <div className="col-md-3">
          <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Last Login</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Name:Prasad</h6>
                    <p class="card-text">Date and time:</p>
                    <p class="card-text">Browser:Chrome</p>
                  </div>
                </div>
                <form>
                  <h2>Search profile</h2>
                <div class="form-group">
                  <label for="exampleInputEmail1">Profile ID</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Name</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">City</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
              
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card" >
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-4">
              <table class="table table-hover table_Background">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>24/2/1958</td>
                    <td><a href="#">Click</a></td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td><a href="#">Click</a></td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td><a href="#">Click</a></td>
                  </tr>
                 
                </tbody>
                <ul class="pagination float-right">
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </table>
           
              </div>
              <div className="col-md-4">
              <table class="table table-hover table_Background">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td><a href="#">Click</a></td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td><a href="#">Click</a></td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td><a href="#">Click</a></td>
                  </tr>
                </tbody>
                <ul class="pagination float-right">
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </table>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Additional Profile</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Status</h6>
                    <p class="card-text">Please feel Additional profile information</p>
                    <a href="#" class="card-link">Go to page</a>
                  </div>
                </div>
              </div>
            </div>
              </div>
        </div>
       
      </div>
    )
  }
}
export default withRouter(Main);