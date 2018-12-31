import React from "react";
import { Link } from "react-router-dom";

const Home = ({data, ...rest}) => {
    console.log("data:",data);
    console.log("rest: ",rest);

    const styleList={
        border: "2px solid",
        display: "inline-block",
        borderRadius: "25px",
        color: "#00ffbf",
        width: "300px",
        height: "300px",
        backgroundColor: "#666699",
        textAlign: "center",
        margin: "20px"
    };

    const handleViewClick = (id) => {
        console.log("id: ",id);
        
    };
    
    return(
        <div>
            <h1>This is Home</h1>
            {
                (data.isLoaded)?
                (<ul>{
                    data.users.map( (user, index) => (
                        <li style={{display: "inline-block"}} key={user.id}>
                            <div style={styleList} className="jumbotron my-3">
                                <p>user: {user.id}</p>
                                <p>name: {user.name}</p>
                                <p>user name: {user.username}</p>
                                <p>email: {user.email}</p>
                                <button 
                                    className="btn btn-secondary"
                                    onClick={ (id) => handleViewClick(user.id) }
                                >
                                    <Link to={{pathname: `/user/${user.id}`}}>View Posts</Link>
                                </button>
                            </div>
                        </li>
                    ) )
                }</ul>)
                :
                <h1>Loading.....</h1>
            }
        </div>
    );
};

export default Home;