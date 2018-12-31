import React from "react";
import {connect} from "react-redux";

const OutputCourse = (props) => {

    return(
        <div className="my-5">
            {
                props.courses.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="jumbotron">
                                <div><p className="text text-primary">Author: {item.author}</p>
                                    <p className="text text-success">Course: {item.course}</p>
                                </div>
                                <p className="text text-warning">{item.details}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

function mapStateToProps(state) {
    return({
        courses: state.courses
    });
}

export default connect(mapStateToProps)(OutputCourse);