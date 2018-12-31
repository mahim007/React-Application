let nextTodoId=0;

export const setVisibilityFilter = (filter) => {
    console.log("filter: "+filter);
    return({
        type: "SET_VISIBILITY_FILTER",
        filter
    });
}

export const VisibilityFilters={
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const toggleTodo = (id) => {
    console.log("todo id:"+id);
    return({
        type: "TOGGLE_TODO",
        id
    });
};

export const addTodo = (text) => {
    console.log("adding todo: "+text);
    return({
        type: "ADD_TODO",
        id: nextTodoId++,
        text
    });
};