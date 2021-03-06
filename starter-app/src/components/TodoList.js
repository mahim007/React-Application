import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo:onTodoClick}) =>{
    return(
        <ul>
            {
                todos.map((item, index) => {
                    return <Todo key={index} {...item} onclick={() => onTodoClick(index)}/>
                })
            }
        </ul>
    );
};

TodoList.prototype ={
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;