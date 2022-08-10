import { useState } from "react";
import "./App.css";
import logo from "./img/logo.png";
import { Props, Task } from "./assets/interface";
import { TaskCard } from "./components/taskCard";
import { TasklList } from "./components/tasklList";
import { Canchas } from "./assets/user";
import { TaskForm } from "./components/taskForm";
import { FaSearch } from "react-icons/fa";

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>(Canchas);
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar nawbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo Futbol" style={{ width: "4rem" }} />
            {title && <h2 className="ml-2">{title}</h2>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm />
          </div>
          <div className="col-md-8">
            <h4 className="text-center">Destacados:</h4>
            <div className="row">
              <TasklList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
