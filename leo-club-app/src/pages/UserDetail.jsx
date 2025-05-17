import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "antd";
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
    <Card title="User Details">
      {/* Read-only form without buttons */}
      <UserForm
        initialValues={user}
        disabled={true}
        onFinish={() => {}}
        showButtons={false} // This will hide form buttons
      />

      {/* Back button positioned at bottom center */}
      <Row justify="center" style={{ marginTop: 24 }}>
        <Col>
          <Link to="/">
            <Button type="primary">Back to List</Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default UserDetail;
