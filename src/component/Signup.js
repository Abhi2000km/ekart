import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     
    const handleUsername = (event) =>{
        setUsername(event.target.value)
    }
    const handleMobile= (event) =>{
        setMobile(event.target.value)
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    const hanlesubmit = (event)=>{
        event.preventDefault();
        console.log(username);
        console.log(mobile);
        console.log(email);
        console.log(password);
    }


        return (
        <div className="signup">
            <div className="myform">
                <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" class="form-control"  onChange={(event)=>handleUsername(event)} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Mobile</label>
                        <input type="text" class="form-control" onChange={(event)=>handleMobile(event)} placeholder="Mobile" />
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" class="form-control" onChange={(event)=>handleEmail(event)} placeholder="Email address" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" onChange={(event)=>handlePassword(event)} placeholder="Password" />
                        
                    </div>

                    <button  onClick={(event)=> hanlesubmit(event)} class="btn btn-primary">Submit</button>
                    <small id="emailHelp" class="form-text text-muted">Already have an account.</small>
                </form>
            </div>
        </div>
    )
}

export default Signup