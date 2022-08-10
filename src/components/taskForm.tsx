import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Canchas } from "../assets/user";

export const TaskForm = () => {
  const [query, setQuery] = useState("");

  const keys = ["title", "description", "price", "star"];
  // console.log(Canchas[2]["title"]);

  const search = (data: any) => {
    return data.filter((item: any) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div>
      <h5>Busca tu Campo:</h5>
      <form>
        <input
          type="search"
          placeholder="Busca aqui..."
          className=" form-control"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button>
          <FaSearch />
        </button> */}
      </form>
    </div>
  );
};
