import {connect} from "react-redux";
import IncreaseButtonComp from "../components/IncreaseButton";
import onIncreaseClick from "../actions/onIncreaseClick";

const mapDispatchToProps = (dispatch) => {
    onIncreaseClick();
    return({
        handleIncrease: () => dispatch(onIncreaseClick())
    });
};

export default connect(null, mapDispatchToProps)(IncreaseButtonComp);