import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    items: json,
                    isLoaded: true,
                });
            });
    }

    render() {
        const {items, isLoaded}=this.state;
        if (!isLoaded){
            return(
                <div>Loading...</div>
            );
        }
        return(
            <div className="App">
                <div className="container">
                    <ul className="list-group">
                        {
                            items.map(item=>(
                                    <li className="list-group-item list-group-item-info py-1" key={item.id}>
                                        <h3 className="text text-danger">id: {item.name}</h3>
                                        <h4 className="text text-info">email: {item.email}</h4>
                                        <p className="text text-secondary">content: {item.body}</p>
                                    </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }


}

export default App;
