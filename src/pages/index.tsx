import { Button, DatePicker, Typography, version } from "antd";
const { Title } = Typography;
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";

const Home = () => {
  return (
    <>
      <title>DayTech TodoList</title>
      <Header />
      <TodoInput />
      <TodoList />
      <DoneList />
    </>
  );
};

export default Home;
