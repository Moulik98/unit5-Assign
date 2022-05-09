import axios from "axios";
import {Link, useLocation, useSearchParams} from "react-router-dom"
import { useEffect, useState } from "react";


const useQuery = (q)=>{
  const param = new URLSearchParams(window.location.search);
  return param.get(q);
}
export const UserList = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const [param] = useSearchParams();
  // console.log("location:", location)
  console.log(param.get("page"))

  console.log(useQuery("page"))

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUsers(data.data);
    });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.id}.{user.first_name}
            
          </Link>
        </p>
      ))}
    </div>
  );
};