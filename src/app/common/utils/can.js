import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
    auth: store.auth,
});

// Authorization HOC
export const Authorization = (WrappedComponent, allowedRoles) => {
    class WithAuthorization extends React.Component {
        constructor(props) {
            super(props)

            // In this case the user is loaded from Redux
            // But it could be loaded from anywhere.
            // MobX, RxJS, Backbone...

            this.state = {
                user: {   name:localStorage.getItem('name'),
                          role :localStorage.getItem('role')      
                     }
            }
        }

        render() {
            
            const { role } = this.state.user;
            
            
            // const { role } = this.state.user.roles.map((role) => {console.log(role.name)})
            if (allowedRoles.includes(role)) {
                return <WrappedComponent {...this.props} />
            } else {
                return <h1> You are not authorized to visit this page </h1>
            }

        }
    }
    return connect(mapStateToProps, null)(WithAuthorization)
}



// class YourRoute extends React.Component {
//     render() {
//       return <div>/* the rest of your page */</div>;
//     }
//   }
  
//   export default Authorization(YourRoute, ['USER', 'ADMIN']);
  
 

