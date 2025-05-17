import { Form, Input, Select, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const DEPARTMENTS = [
  "Frontend",
  "Backend",
  "Full Stack",
  "QA",
  "Machine Learning",
  "Marketing",
];

const UserForm = ({
  initialValues,
  onFinish,
  isEdit = false,
  disabled = false,
  showButtons = true,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    onFinish(values);
    if (!isEdit) navigate("/");
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={!disabled ? handleSubmit : undefined}
      layout="vertical"
      className="max-w-2xl mx-auto"
      disabled={disabled}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please input first name!" }]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please input last name!" }]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item
        label="User Name"
        name="userName"
        rules={[{ required: true, message: "Please input user name!" }]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item
        label="User Type"
        name="userType"
        rules={[{ required: true, message: "Please select user type!" }]}
      >
        <Select disabled={disabled}>
          <Option value="Admin User">Admin User</Option>
          <Option value="System User">System User</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: "Please select department!" }]}
      >
        <Select disabled={disabled}>
          {DEPARTMENTS.map((dept) => (
            <Option key={dept} value={dept}>
              {dept}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {showButtons && !disabled && (
        <Form.Item>
          <Button type="primary" htmlType="submit" className="mr-4">
            {isEdit ? "Update" : "Create"}
          </Button>
          <Button onClick={() => navigate("/")}>Cancel</Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default UserForm;
