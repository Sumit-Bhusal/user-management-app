import { useState, useEffect } from "react";
import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.userId !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <Card
      title="User Management"
      extra={
        <Link to="/user/create">
          <Button type="primary" icon={<PlusOutlined />}>
            Add User
          </Button>
        </Link>
      }
    >
      <UserTable users={users} onDelete={handleDelete} />
    </Card>
  );
};

export default UsersList;
