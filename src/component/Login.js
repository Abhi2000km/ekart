import React, { useState } from 'react'


const Login = () => {
    const[userdetails, setUserdetails] = useState({
        username :'',
        mobile :'',
        email : '',
        password :'',
    })
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const handleChange = (event) =>{
        const {name,value} = event.target
        setUserdetails({...userdetails,[name]:value})
    }
    // const handlePassword = (event) =>{
    //     setPassword(event.target.value)
    //     }
        const hanlesubmit = (event)=>{
            event.preventDefault();
            console.log(userdetails);
        }
    

    return (
        <div className='login'>
            <div className='form'>
                <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" name='username' class="form-control" onChange={(event) => handleChange(event)} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" name='password' class="form-control" onChange={(event) => handleChange(event)} placeholder="Password" />

                    </div>
                    <button  onClick={(event)=> hanlesubmit(event)} class="btn btn-danger">Submit</button>

                </form>

            </div>

        </div>
    )
}

export default Login