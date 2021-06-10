import React from "react";
import { PageHeader, Layout, Breadcrumb } from "antd";

interface HeaderProps {
  title: string;
  children: string;
}
const { Content, Footer } = Layout;

const Headers: React.FC<HeaderProps> = ({ title = "DayTech", children }) => {
  return (
    <>
      <Layout>
        <header>
          <PageHeader
            className="mt-10"
            style={{ padding: "0 50px", margin: "20px 0" }}
            title={title}
            subTitle="TodoList"
          ></PageHeader>
        </header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Headers;
