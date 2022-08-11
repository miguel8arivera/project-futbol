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
        {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${task.latitude}!2d-70.26426578546344!3d-18.013789786233698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f4db3d07e8dae4c!2sCancha%20Sint%C3%A9ticas%20TOP%20GOL!5e0!3m2!1sen!2spe!4v1660170659841!5m2!1sen!2spe"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      </div>
    </div>
  );
};
