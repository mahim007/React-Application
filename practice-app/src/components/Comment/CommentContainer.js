import CommentPage from "./CommentPage";
import {connect} from "react-redux";

function mapStateToProps(state){
    return({
        comments: state.comments
    });
}

export default connect(mapStateToProps)(CommentPage);