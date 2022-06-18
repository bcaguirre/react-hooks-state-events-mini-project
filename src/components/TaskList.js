import React from "react";
import Task from "./Task";

//TaskList
//First, we'll want to display all the tasks in our app. 
//Pass down the task data from App to TaskList, and display each task using the Task component. 
//Make sure to use a key prop!


function TaskList({ TASKS }) {
  
  return (
    <div className="tasks">
      <Task  />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
