import { useState } from "react";
import { Button, Layout, Flex } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import "./App.css";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

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

        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
