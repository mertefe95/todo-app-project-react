import React from "react";
import Tailwindcss from "../assets/tailwind.css";
    
const Form = () => {
    return (
        <form className="h-64 flex justify-center items-center">
            <input type="text" className="todo-input text-black" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select pl-12">
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