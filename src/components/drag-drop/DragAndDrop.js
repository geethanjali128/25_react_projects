import React, { useEffect, useState } from "react";
import "./drag-drop.css";

const DragAndDrop = () => {
  // State to manage loading status
  const [loading, setLoading] = useState(false);
  // State to manage list of todos
  const [todos, setTodos] = useState([]);

  // Function to fetch the list of todos from an external API
  const fetchListOfTodos = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/todos?limit=5&skip=0");

      const json = await res.json();

      if (json && json.todos && json.todos.length > 0) {
        // Set loading to false as data is fetched
        setLoading(false);
        // Add a status of "wip" (work-in-progress) to each todo item
        const updatedTodos = json.todos.map((todoItem) => ({
          ...todoItem,
          status: "wip",
        }));

        // Update the todos state with the fetched data
        setTodos(updatedTodos);
      }
    } catch (e) {
      console.log(e);
      setLoading(false); // Ensure loading is false even in case of an error
    }
  };

  // useEffect to fetch the list of todos when the component mounts
  useEffect(() => {
    fetchListOfTodos(); // Fetch the todos when the component first renders
  }, []); // Empty dependency array means this runs only once

  // console.log(todos);

  // Function called when a todo starts being dragged
  const onDragStart = (event, id) => {
    console.log("dragStart", id);
    event.dataTransfer.setData("id", id.toString()); // Store the dragged todo's id in the dataTransfer object
  };

  // Function called when a todo is dropped into a new status (e.g., "wip" or "completed")
  const onDrop = (event, status) => {
    // Get the dragged todo's id from the dataTransfer object
    const id = event.dataTransfer.getData("id");
    console.log("drop", id);

    // Update the todos array, changing the status of the dragged todo
    const updatedTodos = todos.filter((todoItem) => {
      // If the todo's id matches the dragged id then
      if (todoItem.id.toString() === id) {
        // Update its status (e.g., to "completed" or "wip")
        todoItem.status = status;
      }

      return todoItem; // Return the updated todo item
    });

    setTodos(updatedTodos); // Update the state with the modified todos
  };

  // Function to render todos categorized by their status (work-in-progress or completed)
  const renderTodos = () => {
    // Create an object to store todos based on their status
    const TodoListToRender = {
      wip: [], // Work-in-progress todos will go here
      completed: [], // Completed todos will go here
    };

    // Iterate through each todo item
    todos.forEach((todoItem) =>
      // Push the todo item into the correct category based on its status
      TodoListToRender[todoItem.status].push(
        <div
          onDragStart={(event) => onDragStart(event, todoItem.id)} // Attach onDragStart event to make the item draggable
          draggable // Makes the todo item draggable
          key={todoItem.id}
          className="todo-card"
        >
          {todoItem.todo}
        </div>
      )
    );

    return TodoListToRender; // Return the categorized todos (wip and completed)
  };

  return (
    <div className="container">
      <div className="drag-and-drop-container">
        <h1>Drag and Drop Tasks</h1>
        {loading ? (
          <div className="loader">Fetching Todos! Please Wait.....</div>
        ) : (
          <div className="drag-and-drop-board">
            <div
              onDrop={(event) => onDrop(event, "wip")}
              onDragOver={(event) => event.preventDefault()}
              className="work-in-progress"
            >
              <h3>In Progress</h3>
              <div className="todo-list-wrapper">{renderTodos().wip}</div>
            </div>
            <div className="completed">
              <h3>Completed</h3>
              <div
                onDrop={(event) => onDrop(event, "completed")}
                onDragOver={(event) => event.preventDefault()}
                className="todo-list-wrapper"
              >
                {renderTodos().completed}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
