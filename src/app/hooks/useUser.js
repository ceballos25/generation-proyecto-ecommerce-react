import { useEffect, useState } from "react";
import { userService } from "../services/userService";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(setUsers);
  }, []);

  return { users };
};