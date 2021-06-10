import React from "react";
import { PageHeader } from "antd";

interface HeaderProps {
  title: string;
  children: string;
}

const Headers: React.FC<HeaderProps> = ({ title = "DayTech" }) => {
  return (
    <>
      <header>
        <PageHeader
          className="mt-10"
          style={{ padding: "0 50px", margin: "20px 0" }}
          title={title}
          subTitle="TodoList"
        ></PageHeader>
      </header>
    </>
  );
};

export default Headers;
