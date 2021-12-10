import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = useCallback(() => { //função só será chamada apenas quando alterar os states - melhorar desempenho
    setTasks([...tasks, input]); //recebe o array todo e adiciona o valor do input como novo elemento
    setInput(""); //limpa o input
  }, [input, tasks]);

  //chama a função tasks.length apenas quando altera o state
  const totalTasks = useMemo(() => tasks.length, [tasks]);

  useEffect(() => {
    const tasksStorage = localStorage.getItem("tasks");

    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage)); //transformando a string em objeto js;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //transformando array em string
  }, [tasks]);

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>

      <strong>Você tem {totalTasks} tarefas</strong>
      <br />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}
