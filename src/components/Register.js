import React, {useState } from "react";
import Hero from '../components/Hero';


function Register() {
  const [state , setState] = useState({
    username: "",
    email: "",
    password:"",
    country: "",
    img: "",
    city: "",
    phone: "",



  
  });
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have submitted');
}
  return (
   
    <div >
       <Hero> 
       <div className="p-3 mb-2 bg-primary text-dark text-dark bg-opacity-30">
       <form onSubmit={handleSubmit} >
         <div className="row">
         <div className="col-md-6 mb-4">
            <label for="exampleInputEmail1" 
            className="form-label">
              Username</label>
            <input 
                  type="username"  
                  className="form-control" 
                  id="username" 
                  placeholder="Enter username"
                  aria-describedby="emailHelp"
                  value={state.username}
                  onChange={handleChange}
            />
          </div>
              <div className="col-md-6 mb-4">
                  <label for="exampleInputEmail1" 
                  className="form-label">
                    Email </label>
                  <input 
                        type="email"  
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email"
                        aria-describedby="emailHelp"
                        value={state.email}
                        onChange={handleChange}
                  />
                </div>
         </div>
         
         <div className="row">
              <div className="col-md-6 mb-4">
                  <label for="exampleInputEmail1" 
                  className="form-label">
                    Country</label>
                  <input 
                        type="country"  
                        className="form-control" 
                        id="country" 
                        placeholder="Enter country"
                        aria-describedby="emailHelp"
                        value={state.country}
                        onChange={handleChange}
                  />
                </div>
                
                <div className="col-md-6 mb-4">
                  <label for="exampleInputEmail1" 
                  className="form-label">
                    City</label>
                  <input 
                        type="city"  
                        className="form-control" 
                        id="city" 
                        placeholder="Enter city"
                        aria-describedby="emailHelp"
                        value={state.city}
                        onChange={handleChange}
                  />
                </div>
          </div>
          

          <div className="row">
                      <div className="col-md-6 mb-4">
                        <label for="exampleInputEmail1" 
                        className="form-label">
                          Phone Number</label>
                        <input 
                              type="phone"  
                              className="form-control" 
                              id="phone" 
                              placeholder="Enter phone"
                              aria-describedby="emailHelp"
                              value={state.phone}
                              onChange={handleChange}
                        />
                        </div>
                        <div className="col-md-6 mb-4">
                      <label for="exampleInputPassword1" 
                        className="form-label"
                        >
                          Password
                      </label>
                      <input type="password" 
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          value={state.password}
                          onChange={handleChange} 
                      />
                  </div>
             </div>
             
             
            <br/>
                 <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    className="btn btn-primary"
                  >
                    Submit
                </button>
        </form>  
        </div>   
      </Hero>
      
    </div>
  )
}

export default Register