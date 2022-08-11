import { TaskCard } from "./TaskCard";
import { Task } from "../assets/interface";
import { Canchas } from "../assets/user";

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => {
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
