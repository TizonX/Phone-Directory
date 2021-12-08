import { connect } from "react-redux";
import AddSubscriber from "../components/AddSubscriber/AddSubscriber";
import { addUserDetails } from "../service/actions/Action";
const mapStateToProps = (state)=> ({

});


const mapDispatchToProps = (dispatch)=>({
    AddSubscriberHandler:(dataFromComponent)=>dispatch(addUserDetails(dataFromComponent)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddSubscriber)

