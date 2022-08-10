import foto from "../img/mundialito.jpg";
import { Task } from "../assets/interface";

interface Props {
  task: Task;
}

export const TaskCard = ({ task }: Props) => {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <div>
        <h4>{task.title}</h4>
        <p>
          <b>{task.star}</b> ⭐⭐⭐⭐
        </p>
        <p>{task.description}</p>
        <img src={foto} alt="" width={250} height={150} />
        <p>{task.price} soles x hora</p>
        <p>Calificar cancha</p>
      </div>
    </div>
  );
};
