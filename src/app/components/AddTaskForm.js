import React, { useState } from "react";

export default function AddTaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pendiente", // Estado por defecto
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.status) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    // Llama a la función onAddTask que recibimos como prop
    onAddTask(formData);

    // Limpia el formulario después de enviar
    setFormData({ title: "", description: "", status: "pendiente" });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Agregar Tarea</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Descripción</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Estado</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        >
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En progreso</option>
          <option value="completada">Completada</option>
        </select>
      </div>
      <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "4px" }}>
        Agregar
      </button>
    </form>
  );
}
