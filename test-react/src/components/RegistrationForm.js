import React from "react";
import {connect} from "react-redux";

import courseAction from "../actions/courseAction";

class RegistrationForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            singleCourse: {
                author: "",
                course: "",
                details: ""
            }
        };

        this.handleReset=this.handleReset.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleReset(e){
        e.preventDefault();
        this.setState({
            singleCourse: {
                author: "",
                course: "",
                details: ""
            },
        });
        console.log("reset button clicked!");
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createCourse(this.state.singleCourse);
        this.setState({
            singleCourse: {
                author: "",
                course: "",
                details: ""
            },
        });
        console.log("submit button clicked!");

    }

    handleChange(e){
        console.log(e.target);
        this.setState({
            singleCourse: {
                ...this.state.singleCourse,
                [e.target.name]: e.target.value
            },
        });
    }


    render() {
        return(
            <div>
                <form>
                    <div className="row form-group">
                        <label className="col-sm-5 text-right" htmlFor="autor">Author: </label>
                        <input value={this.state.singleCourse.author} onChange={this.handleChange} className="col-sm-3 form-control" name="author" type="text"/>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-5 text-right" htmlFor="course">Course: </label>
                        <input value={this.state.singleCourse.course} onChange={this.handleChange} className="col-sm-3 form-control" name="course" type="text"/>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-5 text-right" htmlFor="details">Details: </label>
                        <input value={this.state.singleCourse.details} onChange={this.handleChange} className="col-sm-3 form-control" name="details" type="text"/>
                    </div>
                    <div>
                        <button
                            onClick={this.handleReset}
                            className="btn btn-danger mx-3">Reset</button>

                        <button
                            onClick={this.handleSubmit}
                            className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return({

    });
}

const mapDispatchToProps = (dispatch) =>  {
    return({
        createCourse: (course) => dispatch(courseAction(course))
    });

};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);