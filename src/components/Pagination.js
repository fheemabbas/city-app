import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import "../App.css";
const styles = () => {
  return {
    root1: {
      "&:nth-child(even)": {
        backgroundColor: "#FCFDFE",
      },
    },
    viewLink: {
      textDecoration: "none",
      textTransform: "capitalize",
      color: "#000",
    },
    widthfix: {
      padding: "8px 40px 8px 16px !important",
    },
  };
};

const Pagination = (props) => {
  const { rowsPerPage, page, count } = props;
  return (
    <div className="pagination">
      <TablePagination
        rowsPerPageOptions={[2, 4, 6, 8, 10, 25, 100]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page",
        }}
        nextIconButtonProps={{
          "aria-label": "next page",
        }}
        onChangePage={props.onChangePage}
        onChangeRowsPerPage={props.onChangeRowsPerPage}
      />
    </div>
  );
};
export default withStyles(styles)(Pagination);
