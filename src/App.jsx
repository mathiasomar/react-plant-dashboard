import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import './App.css'

const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header"></Header>
        <Content className="content"></Content>
      </Layout>
    </Layout>
  );
}

export default App;
