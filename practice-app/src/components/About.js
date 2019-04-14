import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);

        this.state={
            title: ""
        }

        this.changeHandler=this.changeHandler.bind(this);
        this.clickHandler=this.clickHandler.bind(this);

        this.myRef=React.createRef();
    }

    changeHandler(e){
        let title=e.target.value;
        this.setState({
            title
        });
    }

    clickHandler(){
        let title=this.state.title;
        console.log(this.myRef);
        console.log(this.myRef.current);
        console.log(this.myRef.current.value);


        this.myRef.current.value=title;
        
        console.log(this.myRef);
        console.log(this.myRef.current);
        console.log(this.myRef.current.value);
        this.myRef.current.value=title;
        this.myRef.current.style.backgroundColor="blue";
        this.myRef.current.autoFocus=true;


        this.setState({
            title:""
        });

    }

    render(){
        return (
            <div>
                <h1>This is About</h1>
                <div>
                    <form>
                        <input type="text" value={this.state.title} onChange={this.changeHandler} />
                        <input  ref={this.myRef}></input>
                    </form>
                    <button
                        onClick={this.clickHandler} 
                    >Click</button>
                </div>
            </div>
        );
    }
};

export default About;