import React from "react";

function NumberList(props) {
    const numbers= props.numbers;
    const listItems=numbers.map((item, index)=>
        <li
            key={index}
        >{item*2}</li>
    );

    return(
        <ul>{listItems}</ul>
    );
}

export default NumberList;