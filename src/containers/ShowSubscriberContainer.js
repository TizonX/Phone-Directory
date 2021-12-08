import { connect } from "react-redux";
import ShowSubscriber from "../components/ShowSubscriber/ShowSubscriber";
import { removeUserDetails } from "../service/actions/Action";
const mapStateToProps = (DataGoToComponent) => ({
  data: DataGoToComponent.usersDetails,
});

const mapDispatchToProps = (dispatch) => ({
  ShowSubscriberHandler:(dataFromComponent)=>dispatch(removeUserDetails(dataFromComponent))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowSubscriber);
