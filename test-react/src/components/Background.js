import React, {Component} from "react";

class Background extends Component{

    constructor(props){
        super(props);

        this.state={
            images: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://www.randomuser.me/api/?results=500")
            .then(response => {
                return response.json();
            })
            .then(data => {

                // console.log(data);

                this.setState({
                    images: data.results,
                    isLoaded: true
                });

                // console.log(this.state.images);

            })
    }

    render() {
        const {images, isLoaded} =this.state;
        if (!isLoaded){
            return(
                <div>
                    <h1> Loading...</h1>
                </div>
            );
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="">
                        {
                            images.map(item=>(
                                <div className="rounded float-left" key={item.email}>
                                    <img alt="images" src={item.picture.medium} />
                                    {/*<p>{item.title}</p>*/}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Background;