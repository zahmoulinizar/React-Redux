import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, reset } from "../redux/taskSlice";
import Task from "./Task";

function Items() {
  const { globalList } = useSelector((state) => state.item.items);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");

  return (
      <div classNamee="container">
        <h1 className="center">
          {" "}
          <span className="badge bg-dark">Checkpoint Redux</span>
        </h1>
        <div className="input-group mb-3 px-5 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Descreption
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="descreption"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="center container m-auto row">
          <button
            type="button "
            className="btn btn-dark px-5 col"
            onClick={() => {
              dispatch(
                addItem({ id: globalList.length + 1, desc, isdone: false })
              );
              setDesc("");
            }}
          >
            Add task
          </button>
          
        </div>
        <div style={{width:'100%'}}>
        <Task  globalList />
        </div>
      </div>
  );
}

export default Items;