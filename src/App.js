import "./App.css";
import Header from "./Componentes/Header";
import FormulariosTareas from "./Componentes/FormulariosTareas";
import { useState, useEffect } from "react";
import ListaTareas from "./Componentes/ListaTareas";

const App = () => {
  const tareasGuardadas = localStorage.getItem("tareaGuardada")
    ? JSON.parse(localStorage.getItem("tareaGuardada"))
    : [];

  const [agregarTarea, cambiarTarea] = useState(tareasGuardadas);

  useEffect(() => {
    localStorage.setItem("tareaGuardada", JSON.stringify(agregarTarea));
  }, [agregarTarea]);

  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrar={mostrarCompletadas}
        cambiarOjo={cambiarMostrarCompletadas}
      />
      <FormulariosTareas agregarTarea={agregarTarea} cambiar={cambiarTarea} />
      <ListaTareas
        tarea={agregarTarea}
        cambiar={cambiarTarea}
        mostrar={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
