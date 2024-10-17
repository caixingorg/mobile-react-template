// import React, { useState, useEffect, useCallback } from 'react';
// import { List, Button } from 'antd-mobile';
// import { fetchUsers } from '../services/api';

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);

//   const loadUsers = useCallback(async () => {
//     try {
//       setLoading(true);
//       const data = await fetchUsers();
//       setUsers(data);
//     } catch (error) {
//       console.error('Failed to fetch users:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadUsers();
//   }, [loadUsers]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <List header="User List">
//         {users.map((user) => (
//           <List.Item key={user.id} title={user.name} description={user.email} />
//         ))}
//       </List>
//       <Button onClick={loadUsers}>Reload Users</Button>
//     </div>
//   );
// };

// export default UserList;

import React, { useEffect } from 'react';
import { List } from 'antd-mobile';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchUsersAsync, selectAllUsers } from '../store/usersSlice';
import useComponentPerformance from '../hooks/useComponentPerformance';

const UserList: React.FC = () => {
  useComponentPerformance('UserList');
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const loading = useAppSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  if (loading === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <List header="User List">
      {users.map((user) => (
        <List.Item key={user.id} title={user.name} description={user.email} />
      ))}
    </List>
  );
};

export default UserList;