import UserCard from '../components/UserCard.jsx';
import FetchUser from '../components/FetchUser.jsx';
import { useState } from 'react';


export default function UserList({ users: propsUsers }) {
  const [stateUsersIds, setUsers] = useState([]);
  return (<div className="user-list">
    { propsUsers.map((user,k) => <UserCard user={user} key={k}/>)}
    { stateUsersIds.map(id => <FetchUser id={id} key={id} />)}
    <button onClick={() => setUsers(old => [...old, 1 + propsUsers.length + stateUsersIds.length])} >Next User</button>
  </div>);
}