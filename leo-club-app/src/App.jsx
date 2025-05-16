import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import UsersList from "./pages/UsersList";
import CreateUser from "./pages/CreateUser";
import UserDetail from "./pages/UserDetail";
import EditUser from "./pages/EditUser";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout className="min-h-screen">
        <Header className="flex items-center">
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                label: <Link to="/">Users</Link>,
              },
            ]}
          />
        </Header>
        <Content className="p-4">
          <div
            className="p-6 rounded-lg"
            style={{
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<UsersList />} />
              <Route path="/user/create" element={<CreateUser />} />
              <Route path="/user/view/:userId" element={<UserDetail />} />
              <Route path="/user/update/:userId" element={<EditUser />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
