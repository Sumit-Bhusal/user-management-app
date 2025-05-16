import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, message } from "antd";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((u) => u.userId === parseInt(userId));
    setUser(foundUser);
  }, [userId]);

  const handleUpdate = (values) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((u) =>
        u.userId === parseInt(userId) ? { ...u, ...values } : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      message.success("User updated successfully!");
      navigate("/"); // Redirect to user list after update
    } catch (error) {
      message.error("Failed to update user");
      console.error(error);
    }
  };

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <Card title="Edit User">
      <UserForm initialValues={user} onFinish={handleUpdate} isEdit={true} />
    </Card>
  );
};

export default EditUser;
