
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {signup} from '../redux/Action'
import '../css/Login.scss'
import { Col, Row } from "react-bootstrap";
import Diamond from '../assest/logo.png';
import google from '../assest/Google.png';
import {auth,provider} from "../config"
import { signInWithPopup } from "firebase/auth";
import Home from '../pages/Home'

const Signup = () => {
  const [value,setValue] = useState('')

  const handlclicik = () =>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  });

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let dispatch = useDispatch();
  const handlesignup =  async (userdata) => {
    console.log(userdata);
    let user = await axios.post("http://localhost:8090/user",userdata)
    console.log(user);
    dispatch(signup(user.data))
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    let user = {
      username: username,
      email: email,
      password: password,
    }
    handlesignup(user);
    alert("Signup successful")
  }
  return (
    <>
      <form className="form" onSubmit={handlesubmit}>
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
           <Row className='mx-5 pt-3 p-3'>
              <Col  sm  = {3}>
              <h5 className='text-center '>Name</h5>
              </Col>
              <Col >
            <input
          className='inpu'
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
              </Col>

            </Row> 

            <Row className='mx-5  p-3'>
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
            
            <div >
            <div className="row">
            <input className='submit mb-4 mt-4' type="submit" />

              <button className="btn-1" onClick={handlclicik} ><img className="google" src={google} alt="" /></button>
            </div>
            </div>

             
          </div>
           
           
              
        </div>

      </div>
    </div>
  </section>
      </form>
    </>
  )
}

export default Signup;
