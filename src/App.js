import React, { useEffect, useState } from "react";
import { getdata } from "./components/actions/index";
import "./App.css";
import { connect } from "react-redux";
import FormData from "form-data";
import GridCard from "./components/gridCrad";
import SubmitForm from "./components/submitForm";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
function App(props) {
  const [todo, setTOdo] = useState(props.data);
  useEffect(() => {
    props.getdata();
  }, []);

  // console.log("Todos Data :", todo);
  return (
    <div className="App">
      <Switch>
        <Route path="/home" exact render={(props) => <GridCard />} />
        <Route path="/submit" exact render={(props) => <SubmitForm />} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { data: state.data };
};
export default connect(mapStateToProps, { getdata })(App);
