import { useState } from "react";
import "./App.css";
import logo from "./img/logo.png";
import { Props, Task } from "./assets/interface";
import { Canchas } from "./assets/user";
import { MainPage } from "./components/MainPage";

function App({ title }: Props) {
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
          <MainPage />
        </div>
      </main>
    </div>
  );
}

export default App;
