"use client"; // Asegúrate de que el componente se ejecute del lado del cliente

import React, { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/tasks"); // Llama a la API para obtener las tareas
        const json = await res.json(); // Convierte la respuesta a JSON

        // Verifica si la respuesta es un array
        if (Array.isArray(json)) {
          setTasks(json); // Si es un array, actualiza el estado con las tareas
        } else {
          console.error("La respuesta no es un array", json);
          setTasks([]); // Si no es un array, asigna un array vacío
        }
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
      }
    }
    fetchData();
  }, []); // El array vacío [] asegura que solo se ejecute una vez

  return (
    <main style={{ padding: "2rem", backgroundColor: "#111", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Lista de Tareas</h1>

      {/* Mostrar las tareas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {/* Verifica que tasks sea un array antes de usar map */}
        {Array.isArray(tasks) && tasks.map((task) => (
          <div
            key={task.id}
            style={{
              backgroundColor: "#222",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2 style={{ color: "#FFD700" }}>{task.title}</h2>
            <p><strong>Descripción:</strong> {task.description}</p>
            <p><strong>Estado:</strong> {task.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
