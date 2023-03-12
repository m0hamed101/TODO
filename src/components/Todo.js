import React from "react";



export const Todo = (props) => {
    return (
        <div className="todo h1 m-2" style={{textDecoration: props.todo.complete ? "line-through" : "" }}
            onClick={props.toggleComplete}>{props.todo.text}
            <button className="m-2 btn btn-danger" onClick={props.onDelete}>delete</button>
        </div>
    );
}



