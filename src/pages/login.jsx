import {useState} from "react"
import {useNavigate,Link} from 'react-router-dom' 
import {registerUser,loginUser} from "../api.js"
import './login.css'
function LoginPage(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false) ;
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e)=>{
        e.preventDefault();
        setError('')
        setLoading(true) 

        const data = await loginUser(email,password) ;
        if(data.token){
            localStorage.setItem("token" ,data.token) ;
            navigate('/notes') ;

        }
        else{
            setError(data.message || "Something went wrong") 
        }
        setLoading(false) ;


        
    }

return (
    <div className="login-container">
          
            <h1>AI Notes</h1>
             <div className="loginDiv">  
            <h2>Login</h2> 
            


            <form onSubmit = {handleLogin} className="login-form">
                <label>Email</label>
                <input className="input1" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <label>Password</label>
                <input className="input1" type="password" placeholder="Enter Password" value = {password} onChange={(e)=> setPassword(e.target.value)}/> 
                {error && <p>{error}</p>} 
                <button className="login_btn" type="submit" disabled={loading}>{loading ? "Logging in ..." : "Login" }</button>
                <p>Dont have an account? <Link to="/register">Register</Link></p>


                

            </form>






        </div>







    </div>
)
}

export default LoginPage ;