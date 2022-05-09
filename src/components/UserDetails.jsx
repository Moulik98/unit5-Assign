import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUsers] = useState({});
//   const {isAuth} = useContext(AuthContext)
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUsers(data.data);
    });
  }, []);

  return (
    <div>
      <img src={user.avatar} />
      <div>First Name: {user.first_name}</div>
      <div>Last Name: {user.last_name}</div>
    </div>
  );
};