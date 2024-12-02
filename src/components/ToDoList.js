import React, { useState } from "react";
import {
  faSquareMinus,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add task at the top of the list
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([{ text: newTask, completed: false }, ...tasks]);
      setNewTask("");
    }
  };

  // Handle Enter key press to add task
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  // Toggle task completion
  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete individual task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Remove all tasks
  const handleClearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white/40 backdrop-blur-md rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <div className="text-xs  mt-3 mb-3">
        Press 'Enter' or click 'Add' to add a task.
      </div>
      {/* Input field and Add button */}
      <div className="flex gap-2 mb-4">
        <input
          className="flex-grow border text-[#2a2929] rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress} // Add Enter key press functionality
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="  px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {/* Task list with fixed height and scroll */}
      <ul className="max-h-[200px]  overflow-y-auto mb-4 border-t border-b">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between gap-2 p-2 border-b ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {/* Left side: Checkbox and task text */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(index)}
                className="w-5 h-5"
              />
              <span className={`${task.completed ? "opacity-50" : ""}`}>
                {task.text}
              </span>
            </div>

            {/* Right side: Delete button */}
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-blue-400 hover:text-red-500"
            >
              <FontAwesomeIcon icon={faSquareMinus} />
            </button>
          </li>
        ))}
      </ul>

      {/* Clear All Button */}
      <button
        onClick={handleClearAllTasks}
        className="  px-4 py-2 rounded-lg text-white bg-red-500"
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ToDoList;
