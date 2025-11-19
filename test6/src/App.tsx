import { useState } from "react";
import "./App.css";

type Todo = {
  text: string;
  status: "em andamento" | "finalizado";
};

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Adiciona uma nova tarefa
  function addTodo() {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, status: "em andamento" }]);
    setTask("");
  }

  // Remove tarefa
  function removeTodo(index: number) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  // Alterna status da tarefa
  function toggleStatus(index: number) {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? {
              ...todo,
              status: todo.status === "em andamento" ? "finalizado" : "em andamento",
            }
          : todo
      )
    );
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>

      <div className="card">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: todo.status === "finalizado" ? "line-through" : "none",
                  color: todo.status === "finalizado" ? "#999" : "white",
                }}
              >
                {todo.text} - <strong>{todo.status}</strong>
              </span>
              <div>
                <button onClick={() => toggleStatus(index)}>
                  {todo.status === "em andamento" ? "Finalizar" : "Reabrir"}
                </button>
                <button onClick={() => removeTodo(index)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
