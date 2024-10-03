import "./styles.css";
import { useState } from "react";

const initialTasks = [
  { id: 0, name: "Visiter les temples à Kyoto", done: false },
  { id: 1, name: "Faire un onsen en montagne", done: true },
  { id: 2, name: "Monter au sommet du Fuji", done: false },
  { id: 3, name: "Se perdre dans Tokyo", done: false },
];

let id = initialTasks.length;

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState("");

  function addButton() {
    setTasks([...tasks, { id: id, name: input, done: false }]);
    setInput("");
    id++;
  }

  function delButton(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  }

  function doneButton(taskID) {
    setTasks(
      tasks.map((task) =>
        task.id === taskID ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="">
      <h1>TodoList - JAPAN</h1>
      <h2>V 2.0</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="button addButton" onClick={addButton}>
        Ajouter
      </button>

      <ul className="list todoList">
        <h3>TODO :</h3>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.done ? (
              <> </>
            ) : (
              <>
                <input
                  type="checkbox"
                  className="checkBox"
                  onClick={() => doneButton(task.id)}
                />
                {task.name}
                <button
                  className="button delButton"
                  onClick={() => delButton(task.id)}
                >
                  Supprimer
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <ul className="list doneList">
        <h3>DONE :</h3>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.done ? (
              <>
                <input
                  type="checkbox"
                  className="checkBox"
                  onClick={() => doneButton(task.id)}
                  checked
                />
                {task.name}
                <button
                  className="button delButton"
                  onClick={() => delButton(task.id)}
                >
                  Supprimer
                </button>
              </>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
