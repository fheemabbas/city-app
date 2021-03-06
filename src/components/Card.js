import React from "react";
import { getpagedata } from "./actions/index";
import { connect } from "react-redux";
import "../App.css";
const styles = {
  title: {
    lineHeight: "1.5em",
    overflow: "hidden",
    // height: "3em",
    padding: "10px 0px",
    fontSize: "18px",
    fontWeight: 600,
  },
  container: {
    marginTop: "0px",
    margin: "10px",
    width: "20rem",
    border: "1px solid #efefef",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
    padding: "20px",
    borderRadius: "5px",
  },
};
function Card(props) {
  const { data, page, rowsPerPage, history } = props;
  return (
    <div className="card " style={styles.container}>
      <div className="card-body">
        <div>Todo ID : {data.id}</div>
        <div>user-ID : {data.userId}</div>
        <div className="card-title title" style={styles.title}>
          {data.title}
        </div>
        <button
          type="submit"
          onClick={() => {
            props.getpagedata({
              page: page,
              rowsPerPage: rowsPerPage,
            });
            history.push("/submit");
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default connect(null, { getpagedata })(Card);
