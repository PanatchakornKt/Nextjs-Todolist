import { Button, DatePicker, Typography, version } from "antd";
const { Title } = Typography;
import AddTask from "@/components/AddTask";

const Home = () => {
  return (
    <>
    <title>DayTech TodoList</title>
      <AddTask />
    </>
  );
}

export default Home;
