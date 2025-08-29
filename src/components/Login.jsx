import   React ,{ useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";


const Login = () => {
  const [emailId, setEmailId] = useState("piyushtirpude@gmail.com");
  const [password, setPassword] = useState("Piyushk@9800");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleLogin = async()=>{

  try {
    const res = await axios.post(BASE_URL + "/login",{
      emailId,
      password
    },
    {withCredentials:true}
  )
   dispatch(addUser(res.data));
  return navigate("/feed");
  } catch (error) {
     console.error(error);
  }
 }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input"
                value={emailId}
                placeholder="enter email here"
                onChange={(e)=> setEmailId(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input"
                placeholder="enter password here"
                onChange={(e)=> setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
