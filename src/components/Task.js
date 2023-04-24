import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, deleteTasks, editTasks } from "../redux/taskSlice";

export default function Task() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const item = useSelector((state) => state.Tasks.Tasks);
  const [done, setDone] = useState(false);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [desc, setDesc] = useState("");

  return (
    <div className="task-top">
      <div className="task">
        <span>Tasks</span>
        <input
          type="text"
          value={description}
          placeholder="Task descriptions "
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(addTasks({ id: item.length + 1, description }))
          }
        >
          Add
        </button>
      </div>
      <div>
        {item.length > 0 ? (
          item.map((task) => (
            <div className="content" key={task.id}>
              <span></span>
              <span>
                {" "}
                Description : {task.description} {task.id}
              </span>
              <button
                onClick={() => {
                  setEdit(true);
                  setId(task.id);
                }}
              >
                Edit
              </button>
              {edit && id === task.id && (
                <>
                  <input
                    type="text"
                    placeholder="edit task"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <input type="checkbox" checked={done} onClick={() => setDone(!done)} />
                  <button
                    onClick={() => {
                      dispatch(
                        editTasks({ id: task.id, description: desc, done })
                      );
                      setDesc("");
                      setEdit(false);
                    }}
                  >
                    update
                  </button>
                </>
              )}
              <button onClick={() => dispatch(deleteTasks({ id: task.id }))}>
                Delete
              </button>
              <input type="checkbox" checked={done} onClick={() =>{ if(id==task.id) setDone(!done)}} />
            </div>
          ))
        ) : (
          <h6>No Tasks</h6>
        )}
      </div>
        <button style={{margin:10}}>Done</button>
        <button style={{margin:10}}>Not Done</button>
    </div>
  );
}
