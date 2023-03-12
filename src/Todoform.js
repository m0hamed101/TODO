import React, { useState } from "react";
import shortid from 'shortid';

export const TodoForm = (props) => {

    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(
            e.target.value
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: shortid.generate(),
            text: text,
            complete: false
        });
        setText("")
    }
    return (

        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} class="d-flex justify-content-center align-items-center  w-50 m-5">
                <div class="form-outline flex-fill">
                    <input onChange={handleChange} value={text} type="text" id="form2" class="form-control" />
                </div>
                <button onClick={handleSubmit} type="submit" class="btn btn-info ms-2">Add</button>
            </form>
        </div>
    );
}



