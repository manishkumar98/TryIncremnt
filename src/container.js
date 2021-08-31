import App from "./App";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};
const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({
      type: "INCREMENT"
    });
  },

  decrement: () => {
    dispatch({
      type: "DECREMENT"
    });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
