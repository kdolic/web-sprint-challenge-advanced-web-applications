import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  //2. Add whatever state nessiary for form functioning.
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState('')
  
  const changeHandler = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  //5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.

  
  const login = event => {
    event.preventDefault();
    axios
    .post('http://localhost:5000/api/login', user)
    .then(res => {
      console.log('POST RESPONSE: ', res.data)
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubbles')

    })
    .catch(err => {
      setError(err.message)
      console.log('POST ERROR: ', err)
    })
  }

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });

  //Task List:
  //1. Build a form containing a username and password field.
  //3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label>Username: 
          <input
            id='username'
            type='text'
            name='username'
            onChange={changeHandler}
            placeholder='Username...'
            value={user.username}
          />
        </label>
      <br></br>
        <label>Password:
          <input
            id='password'
            type='password'
            name='password'
            onChange={changeHandler}
            placeholder='Password...'
            value={user.password}
            />
      </label>
      <div>{error ? <p>Username or Password not valid</p> : ''}</div>

      <button>Login</button>
      </form>
    </div>
    //4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
  );
};


export default Login;