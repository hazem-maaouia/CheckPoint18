import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../Js/Action/index";
import { Button } from "react-bootstrap";
import EditTask from "./EditTask";

const ListTask = ({ listItem }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  return (
    <div>
      {listItem.map((item) => (
        <div className="main">
          <span className={item.isDone ? "lineTh" : "text"}>{item.task}</span>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteTask(item.id))}
          >
            Delete
          </Button>
          <Button
            variant="success"
            onClick={() => dispatch(completeTask(item.id))}
          >
            {item.isDone ? "undo" : "Complete"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleShow();
              setId(item.id);
            }}
          >
            Edit
          </Button>
          <EditTask handleClose={handleClose} show={show} item={item} id={id} />
        </div>
      ))}
    </div>
  );
};

export default ListTask;
