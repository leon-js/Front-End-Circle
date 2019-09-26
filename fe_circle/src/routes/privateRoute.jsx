import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: window.localStorage.getItem('login') ? true : false
    }
  }

  UNSAFE_componentWillMount() {
    if(!this.state.isAuthenticated) {
      const {history} = this.props;
      setTimeout(() => {
        history.replace('/login');
      }, 1000)
    }
  }

  render() {
    const { component: Component, ...rest} = this.props;
    console.log(this.props)

    return this.state.isAuthenticated ?
      (
        <Route {...rest}
          render={(props) => ( <Component {...props} />
          )}
        />
      ) : (<p style={{'width': '100%', 'textAlign': 'center', 'fontSize': '20px', 'lineHeight': '50px'}}>请登录...</p>)

  }
}

export default withRouter(PrivateRoute);
