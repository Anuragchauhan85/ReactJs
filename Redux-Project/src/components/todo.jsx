import { useSelector } from "react-redux"
import Addform from "./Addform";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { marksAsdone } from "../features/todo/todoSlice";


export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    const clickHandler = (id) => {
        dispatch(deleteTodo(id));
    }

    const markHandler = (id) => {
        dispatch(marksAsdone(id))
    }

    return (
      <>
        <Addform />
        <h2>Todo</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ color: todo.done ? "green" : "black" }}>
              {todo.task}
              <button onClick={() => clickHandler(todo.id)}>Delete</button>
              <button onClick={() => markHandler(todo.id)}>Mark As Done</button>
            </li>
          ))}
        </ul>
      </>
    );
}