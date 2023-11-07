import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task !== '' && taskDate !== '') {
      setTasks([...tasks, { text: task, date: taskDate, completed: false }]);
      setTask('');
      setTaskDate('');
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>To-Do Planner</h1>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <input
              type="text"
              style={{ flexGrow: '1', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '16px' }}
              placeholder="Add a new task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="date"
              style={{ padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '16px' }}
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
            <button
              style={{ padding: '8px 16px', marginLeft: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: '#fff',
                  marginBottom: '10px',
                  padding: '10px',
                  border: '1px solid #ced4da',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: 'black',
                  fontWeight: 'normal',
                }}
              >
                <div>
                <small>{task.date}</small>
                <div>{task.text}</div>
                </div>
                <button
                  className="btn"
                  style={{ minWidth: '150px', minHeight: '40px', backgroundColor: task.completed ? '#28a745' : '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  onClick={() => completeTask(index)}
                  disabled={task.completed}
                >
                  {task.completed ? 'Completed' : 'Complete'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#343a40', color: '#fff' }}>
        <small>Copyright &copy; 2023 <a href="https://www.github.com/codebykt" style={{ textDecoration: 'none', color: 'blue' }}>codebykt</a> . All rights reserved.</small>
      </div>
    </div>
  );
};

export default TodoApp;
