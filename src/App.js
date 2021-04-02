import React, { Component } from "react";
import Test from "./Test";
import TaskEditor from "./TaskEditor";
import createTask from "./createTask";
import TaskList from "./TaskList";

export default class App extends Component {
  state = {
    tasks: [],
  };

  addTask = () => {
    const task = createTask();
    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  deleteTask = (id) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1>Let's check the button</h1>
        <TaskEditor onAddTasks={this.addTask} />
        <TaskList tasks={tasks} onDeleteTask={this.deleteTask} />
      </div>
    );
  }
}