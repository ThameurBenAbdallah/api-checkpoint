import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Button';

import React from 'react';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      

      return (
        
        <div>
          <h1>List of Users</h1>
          <ul className="user-list">
            {users.map(user => (
              <div key={user.id}>
                <Card variant="outlined" fullWidth>
                  <h2 className="name">{user.name}</h2>
                  <p className="email">{user.email}</p>
                  </Card>
               
              </div>
            ))}
          </ul>
        </div>
       
        
      );
      
      
}

export default UsersList;
