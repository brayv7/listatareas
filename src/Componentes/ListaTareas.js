import React from "react";
import Tareas from "./Tareas";

const ListaTareas = ({ tarea, cambiar, mostrar }) => {
  const toggleCompletada = (id) => {
    cambiar(
      tarea.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      })
    );
  };

  const editarTexto = (id, nuevoTexto) => {
    cambiar(
      tarea.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, texto: nuevoTexto };
        }
        return tarea;
      })
    );
  };

  const borrarTarea = (id) => {
    cambiar(
      tarea.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        }
        return null;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {tarea.length > 0 ? (
        tarea.map((tareas) => {
          if (mostrar) {
            return (
              <Tareas
                key={tareas.id}
                tarea={tareas}
                editar={editarTexto}
                toggle={toggleCompletada}
                borrar={borrarTarea}
              />
            );
          } else if (!tareas.completada) {
            return (
              <Tareas
                key={tareas.id}
                tarea={tareas}
                editar={editarTexto}
                toggle={toggleCompletada}
                borrar={borrarTarea}
              />
            );
          }
          return null;
        })
      ) : (
        <div className="lista-tareas__mensaje">
          {" "}
          - NO hay tareas asignadas -{" "}
        </div>
      )}
    </ul>
  );
};

export default ListaTareas;
