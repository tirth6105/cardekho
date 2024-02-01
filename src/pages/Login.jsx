import React, { useEffect, useState } from 'react'
import '../css/Login.scss'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, signup } from '../redux/Action'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Diamond from '../assest/logo.png';
// import '../css/signup.css'

const Login = () => {



  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let dispatch = useDispatch();
  const handleLogin =  async (email, password) => {
    // console.log(userdata);
    let user = await axios.get
    (`http://localhost:8090/user?email=${email}&password=${password}`);
    console.log(...user.data);
    dispatch(signup(...user.data));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
      handleLogin(email, password);

  };
  return (
    <>
      <form onSubmit={handlesubmit}>
      <section>
    <div className="container bby p-5">
      <div className="row">
      <div className="col-12 col-md-6">
              <Row className=''>
                 <img className='img11' src={Diamond} alt="" />
              </Row>

        </div>

        <div className="col-12 col-md-6 sign">
          <h1 className='text-center p-4 '>Login</h1>
          <h5 className='text-center pb-5' >for Better Experience, Order tracking & Regular updates</h5>
          <div>
          {/* <Row className='mx-5 p-3'>
              <Col  sm  = {3}>
              <h5 className='text-center '>Name</h5>
              </Col>
              <Col >
                 <input type="text" placeholder="Name" />
              </Col>

            </Row> */}

            <Row className='mx-5 pt-5 p-3'>
              <Col  sm  = {3}>
              <h5 className='text-center '>Email</h5>
              </Col>
              <Col >
              <input
              className='inpu' type="email" placeholder="email" value={email} 
              onChange={(e) => setEmail(e.target.value)} />
              </Col>

            </Row>

            <Row className='mx-5 p-3'>
              <Col  sm  = {3}>
              <h5 className='text-center '>Password</h5>
              </Col>
              <Col>
              <input
              className='inpu' type="password" placeholder="password" value={password}onChange={(e) => setPassword(e.target.value)} />
              </Col>

            </Row>
            
            <input className='submit mb-4 mt-4' type="submit" />
          </div>
           
           
              
        </div>

      </div>
    </div>
  </section>
      </form>
    </>
  )
}

export default Login
