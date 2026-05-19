import { useEffect, useState } from 'react';
import { userService } from '../services/user.service.js';

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(setUsers);
  }, []);

  return { users };
};
