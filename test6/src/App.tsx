import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo() {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  }

  function removeTodo(index: number) {
    setTodos(todos.filter((_, i) => i !== index));
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
      {/* AQUI — o card envolvendo tudo */}
    
      <div className="card">
      
        

        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeTodo(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
