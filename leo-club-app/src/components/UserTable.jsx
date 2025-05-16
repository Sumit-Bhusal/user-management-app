import { Table, Tag, Button, Space, Popconfirm, message } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const UserTable = ({ users, onDelete }) => {
  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "User Type",
      dataIndex: "userType",
      key: "userType",
      render: (userType) => (
        <Tag color={userType === "Admin User" ? "green" : "gold"}>
          {userType}
        </Tag>
      ),
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/user/view/${record.userId}`}>
            <Button icon={<EyeOutlined />} type="primary" ghost>
              View
            </Button>
          </Link>
          <Link to={`/user/update/${record.userId}`}>
            <Button icon={<EditOutlined />}>Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => onDelete(record.userId)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} rowKey="userId" />;
};

export default UserTable;
