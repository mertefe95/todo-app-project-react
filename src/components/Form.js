import React from "react";
import Tailwindcss from "../assets/tailwind.css";

const Form = ({ setInputText }) => {
    // Here I can write javascript code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    return (
        <form>
            <input type="text" onChange={inputTextHandler} className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;