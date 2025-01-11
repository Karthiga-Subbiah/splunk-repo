import React,{useState,useEffect} from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [details,setDetails]=useState();
  const [errors,setErrors]=useState();
    let [users, setUsers] = useState([]);
    const navigate=useNavigate()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// console.log(details,"details");

  useEffect(() => {
    let accounts =JSON.parse(localStorage.getItem("accounts"));
    accounts = accounts || [];
    setUsers({
      accounts,
      email: accounts.map((user) => user.email),
      password: accounts.map((user) => user.password),
    });
  }, []);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name==="email"){
      if(!emailRegex.test(value)){
         setErrors({...errors,[name]:"Enter Valid Email!"})
      }else if(!users?.email.includes(value)){
         setErrors({...errors,[name]:"Email Doesn't Exist!"})
      }
      else{
        setErrors({...errors,[name]:""})
      }

    }else if(name==="password"){
      if(!passwordRegex.test(value)){
        setErrors({...errors,[name]:"Enter Valid Password!"})
      }else if(users?.accounts.filter((user)=>user.email===details.email)[0].password!==value){
        setErrors({...errors,[name]:"Password is incorrect!"})
     }
      else{
        setErrors({...errors,[name]:""})
      }
    }
    setDetails({...details,[name]:value});
  }

  const onSubmit=()=>{
    // console.log(Object.values(errors).filter(value=>value))
    if(!Object.values(errors).filter(value=>value).length){
         navigate("/products")
    }
  }
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Log in</h2>
        <form>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email *" required onChange={(e)=>{
              handleChange(e)
            }}/>
            <div className="form-error">{errors?.email}</div>
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password *" required onChange={(e)=>{
              handleChange(e)
            }} />
               <div className="form-error">{errors?.password}</div>
          </div>
          <button className="btn btn-primary" type="button" onClick={onSubmit}>
            Login
          </button>
        </form>
        <div className="login-redirect">
          <p>
          Don't Have an account? <a href="/signup">Create</a>
          </p>
        </div>
        {/* <div className="social-login">
          <p>Or Register With</p>
          <div className="social-icons">
            <button className="social-btn facebook">F</button>
            <button className="social-btn twitter">T</button>
            <button className="social-btn google">G</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;