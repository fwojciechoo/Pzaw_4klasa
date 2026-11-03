
import { useState } from "react";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  handleCheck: (id: number) => void;
}

const tasks: TaskProps[] = [
  { id: 1, title: "Task 1", completed: false, handleCheck: () => {} },
  { id: 2, title: "Task 2", completed: false, handleCheck: () => {} },
  { id: 3, title: "Task 3", completed: false, handleCheck: () => {} },
  { id: 4, title: "Task 4", completed: false, handleCheck: () => {} },
  { id: 5, title: "Task 5", completed: false, handleCheck: () => {} }
];

function Task({ id, title, completed, handleCheck }: TaskProps) {
  return (
    <div>
      <label>{title}</label>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCheck(id)}
      />
    </div>
  );
}

function App() {
  const [taskList, setTaskList] = useState(tasks);

  function handleCheck(id: number) {
    setTaskList(taskList.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  }

  return (
    <div>
      {taskList.map(task => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          handleCheck={handleCheck}
        />
      ))}

      <p>
        Niewykonane: {taskList.filter(task => !task.completed).length}
      </p>
    </div>
  );
}

export default App;
