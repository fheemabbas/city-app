import React, { useState } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination";
import { getdata, getpagedata } from "./actions/index";
import Card from "./Card";

function GridCard(props) {
  const [page, setpage] = useState(
    (props.c_page.page && props.c_page.page.page) || 0
  );
  const [rowsPerPage, setrowsPerPage] = useState(
    (props.c_page.page && props.c_page.page.rowsPerPage) || 8
  );
  const itemLength =
    props.data && props.data.state && props.data.state.data
      ? props.data && props.data.state && props.data.state.data.length
      : 0;
  let history = useHistory();
  const handleChangePage = (event, newPage) => {
    setpage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setrowsPerPage(event.target.value);
    setpage(0);
  };
  return (
    <Grid container className="" spacing={5}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {props.data &&
            props.data.state &&
            props.data.state.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <Grid item key={data.id}>
                  <Card
                    data={data}
                    history={history}
                    page={page}
                    rowsPerPage={rowsPerPage}
                  />
                </Grid>
              ))}
        </Grid>
      </Grid>
      <Pagination
        count={itemLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return { data: state.data, c_page: state.page };
};
export default connect(mapStateToProps, { getdata, getpagedata })(GridCard);
