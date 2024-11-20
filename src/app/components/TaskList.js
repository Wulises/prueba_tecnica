import React from "react";

export default function TaskList({ tasks }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
      {tasks.map((task) => (
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
          <p>
            <strong>Descripción:</strong> {task.description}
          </p>
          <p>
            <strong>Estado:</strong> {task.status}
          </p>
        </div>
      ))}
    </div>
  );
}
