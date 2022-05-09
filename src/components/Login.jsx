import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Login = () => {
  const { handleAuth } = useContext(AuthContext);

  const navigate = useNavigate()
  
  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button
        onClick={() => {
          handleAuth(true);
          navigate(-2)
        }}
       
      >
        Submit
      </button>
    </div>
  );
};