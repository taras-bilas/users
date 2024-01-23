import { useEffect, useState } from 'react';
import { UserCard } from '../UserCard/UserCard';
import './UserList.scss';
import axios from 'axios';
import { Header } from '../Header/Header';
import { Ring } from '@uiball/loaders';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }

    getUsers();
  }, [])

  return (
    <>
      <Header title="Users" />

      {isLoading ? (
        <div className="spinner">
          <Ring
            size={40}
            lineWeight={5}
            speed={2}
            color="black"
          />
        </div>
      ) : (
        <div className="cards">
          {users.map(user => (
            <UserCard user={user} key={user.username} />
          ))}
        </div>
      )}
    </>
  );
}