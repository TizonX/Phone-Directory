import React from "react";
// import AddSubscriber from "./components/AddSubscriber/AddSubscriber";
// import ShowSubscriber from "./components/ShowSubscriber/ShowSubscriber";
import AddSubscriberContainer from "./containers/AddSubscriberContainer";
import ShowSubscriberContainer from "./containers/ShowSubscriberContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  
  // const [addSubscriber, setaddSubscriber] = useState([]);
  // const addSubscriberDetails = (newSubscriber) => {
  //   console.log("App directory: passing function as a agrument");
  //   console.log(newSubscriber);
  //   setaddSubscriber([...addSubscriber, newSubscriber]);
  // };
  // const deleteSubscriberHandler = (subscriberId) => {
  //   const updateDetails = addSubscriber.filter((elementForIdMatch) => {
  //     return elementForIdMatch.id != subscriberId;
  //   });
  //   setaddSubscriber(updateDetails);
  // };

 


  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ShowSubscriberContainer
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/AddSubscriber"
            element={
              <AddSubscriberContainer />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
