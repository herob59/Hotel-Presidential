import React, {useState } from "react";
import Hero from '../components/Hero';

function Login() {
  const [state , setState] = useState({
    email: "",
    password:"",
  
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
   
    <div>
       <Hero>
       <div class="p-3 mb-2 bg-primary text-dark text-dark bg-opacity-30">
       <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" 
            className="form-label">
              Email address</label>
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
              <div className="mb-3">
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

export default Login