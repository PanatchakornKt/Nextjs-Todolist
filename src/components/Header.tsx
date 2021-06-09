import React from "react";
import { PageHeader } from "antd";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title = "DayTech" }) => {
  return (
    <>
      <header>
        <PageHeader
          className="site-page-header"
          title={title}
          subTitle="TodoList"
        ></PageHeader>
      </header>
    </>
  );
};

export default Header;
