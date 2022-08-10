import { TaskCard } from "./taskCard";
import { Task } from "../assets/interface";
import { FaSearch } from "react-icons/fa";

interface Props {
  tasks: Task[];
}

export const TasklList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task, id) => (
        <div className="col-md-6 mb-5" key={id}>
          <TaskCard task={task} />
        </div>
      ))}
    </>
  );
};
