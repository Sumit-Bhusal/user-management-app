import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((u) => u.userId === parseInt(userId));
    setUser(foundUser);
  }, [userId]);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Card
      title="User Details"
      extra={
        <Link to="/">
          <Button type="primary">Back to List</Button>
        </Link>
      }
    >
      <UserForm initialValues={user} onFinish={() => {}} disabled />
    </Card>
  );
};

export default UserDetail;
