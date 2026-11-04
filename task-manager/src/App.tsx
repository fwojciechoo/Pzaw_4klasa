import { useState } from "react";

interface TaskProps {
  title: string;
  completed: boolean;
}

const tasks: TaskProps[] = [
  {
    title: "Task 1",
    completed: false,
  },
  {
    title: "Task 2",
    completed: true,  
  },
  {
    title: "Task 3",
    completed: false,
  },
  {
    title: "Task 4",
    completed: false,
  },
  {
    title: "Task 5",
    completed: false,
  },

]

function App() {
  const [taskList, setTaskList] = useState(tasks);
  
  function HandleChange(key: string)
  {
    setTaskList(taskList.map(task => {
      if (task.title === key) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }))
  }
  
  return (
    <div>
      <div>
      {taskList.map(task => (
        <div key={task.title}>
        <ul>
          <li>{task.title}</li> <input type="checkbox" defaultChecked={task.completed} onChange={() => HandleChange(task.title)}/>
        </ul>
      </div>
      ))}
      </div>

      <p>Niezrobione {taskList.filter(task => task.completed === false).length}</p>
    </div>
  );

}
export default App;