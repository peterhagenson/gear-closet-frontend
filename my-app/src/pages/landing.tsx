import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../services/usersApi";
import { useEffect, useState } from "react";

function Landing() {

  const [users, setUsers] = useState([])
  const user = useSelector((state: any) => state.user)
  const {data, isSuccess} = useGetUsersQuery(user);

  useEffect(() => {
    if(isSuccess) {
      setUsers(data as any);
    }
  }, [isSuccess, data])

  console.log(isSuccess)
  return (
    <div>
      <h1>Landing</h1>
      <p>{users && JSON.stringify(users)}</p>
    </div>
    );
  } 


export default Landing;