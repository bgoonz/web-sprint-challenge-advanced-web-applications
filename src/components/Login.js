// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
// 
//   const [loginInfo, setLoginInfo] = useState({
//     username: "",
//     password: "",
//   });
// 
//   const [error, setError] = useState("");
// 
//   const { push } = useHistory();
// 
//   const handleChanges = (e) => {
//     setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
//   };
// 
//   const submitHandler = (e) => {
//     // make a post request to retrieve a token from the api
//     // when you have handled the token, navigate to the BubblePage route
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/login", loginInfo)
//       .then((res) => {
//         localStorage.setItem("token", res.data.payload);
//         push("/protected");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     //If no username or password is entered than display error
//     if (loginInfo.username === "" || loginInfo.password === "") {
//       setError("Username and Password field is required.");
//       //If username and password don't match correct information then display error
//     } else if (
//       loginInfo.username !== "Lambda" ||
//       loginInfo.password !== "i<3Lambd4"
//     ) {
//       setError("Incorrect Login.");
//     }
//   };
// 
//   return (
//     <div>
//       <h1>Welcome to the Bubble App!</h1>
//       <div data-testid="loginForm" className="login-form">
//         <h2>Build login form here</h2>
//       </div>
//       <form onSubmit={submitHandler}>
//         <input
//           data-testid="username"
//           name="username"
//           type="text"
//           value={loginInfo.username}
//           placeholder="Username"
//           onChange={handleChanges}
//         />
//         <input
//           data-testid="password"
//           name="password"
//           type="password"
//           value={loginInfo.password}
//           placeholder="Password"
//           onChange={handleChanges}
//         />
//         <button>Login</button>
//       </form>
//       <p data-testid="errorMessage" className="error">
//         {error}
//       </p>
//     </div>
//   );
// };
// 
// export default Login;


import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const history = useHistory();

  const [ values, setValues ] = useState( { username: '', password: '' } );
  const [ errors, setErrors ] = useState( { message: '' } );

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = errors.message;
  //replace with error state

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setValues( { ...values, [ name ]: value } );
    if ( ( name === 'username' && value.length === 0 ) || ( name === 'password' && value.length === 0 ) ) {
      setErrors( { message: 'Username or Password not valid' } );
    }
    else {
      setErrors( { message: '' } );
    }
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    Axios.post( 'http://localhost:5000/api/login', values )
      .then( res => {
        console.log( res );
        localStorage.setItem( 'token', res.data.payload );
        history.push( '/protected' );
      } )
      .catch( err => {
        console.log( err );
      } );
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={ handleSubmit }>
          <input
            type='text'
            name='username'
            data-testid='username'
            placeholder='Username'
            value={ values.username }
            onChange={ handleChange }
          />
          <input
            type='password'
            name='password'
            data-testid='password'
            placeholder='Password'
            value={ values.password }
            onChange={ handleChange }
          />
          <button type='submit'>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{ error }</p>
    </div>
  );
};

export default Login;
//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.

/*
 Make sure that the input
 for your username and password includes the data - testid = "username" and data - testid = "password" attributes.These are needed for codegrade testing and codegrade autotests will fail without them.
*/
