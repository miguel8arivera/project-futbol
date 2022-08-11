import { useState } from "react";
import { Canchas } from "../assets/user";
import foto from "../img/mundialito.jpg";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export const MainPage = () => {
  const [query, setQuery] = useState<string>("");

  const filteredSoccerFields = Canchas.filter(
    soccerField => soccerField.description.includes(query));

  return (
    <>
        <div className="col-md-4">
            <TaskForm onSearch={setQuery} />
        </div>
        <div className="col-md-8">
        <h4 className="text-center">Destacados:</h4>
        <div className="row">
            <TaskList tasks={filteredSoccerFields} />
        </div>
        </div>
    </>
  );
};
