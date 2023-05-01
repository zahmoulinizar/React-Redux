import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { doneItem, editItem, filterByDone, reset } from "../redux/taskSlice";
function Task(props) {
  const dispatch = useDispatch();
  const { filtredList, globalList } = useSelector((state) => state.item.items);
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState(null);
  const [desc2, setDesc2] = useState("");
  return (
    <div>
      <div className="flex-row container text-center mt-3 ">
        <div className="row m-auto flex" style={{ width: "100%" }}>
          <button
            type="button"
            class="btn btn-primary col-3"
            onClick={() => dispatch(filterByDone(true))}
          >
            task is done{" "}
          </button>
          <button
            type="button"
            class="btn btn-danger col-3 "
            onClick={() => dispatch(filterByDone(false))}
          >
            task is not done{" "}
          </button>
          <button
            type="button"
            class="btn btn-success col-3"
            onClick={() => dispatch(reset())}
          >
            show all task{" "}
          </button>
        </div>
      </div>

      <div className="flex">
        {globalList.length >= 0
          ? filtredList.map((item1) => (
              <div
                className="rounded bg-light container my-2 shadow p-3 mb-5 bg-body-tertiary"
                key={item1.id}
              >
                <div className="card-body">
                  <h5 className="card-title">{item1.title}</h5>
                  <p className="fs-3">{item1.desc}</p>
                  <div className="button">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setUpdate(true);
                        setId(item1.id);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className={`btn mx-1 ${
                        item1.isdone ? "btn-success" : "btn-danger"
                      } `}
                      onClick={() => dispatch(doneItem(item1.id))}
                    >
                      Done
                    </button>
                    {update && id === item1.id && (
                      <>
                        <div
                          className="flex-row justify-content-between"
                          style={{ width: 500 }}
                        >
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="descreption"
                            onChange={(e) => setDesc2(e.target.value)}
                          />
                        </div>
                        <button
                          className="btn btn-outline-success mx-2"
                          onClick={() => {
                            dispatch(editItem({ id, desc: desc2 }));
                            setUpdate(false);
                          }}
                        >
                          update
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          : "no items"}
      </div>
    </div>
  );
}

export default Task;
