import { Card } from "antd";
import UserForm from "../components/UserForm";

const CreateUser = () => {
  const handleCreate = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
      userId:
        users.length > 0 ? Math.max(...users.map((u) => u.userId)) + 1 : 1,
      ...values,
    };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <Card title="Create New User">
      <UserForm onFinish={handleCreate} />
    </Card>
  );
};

export default CreateUser;
