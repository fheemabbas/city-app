import React from "react";
import { Link } from "react-router-dom";
function SubmitForm() {
  return (
    <div>
      <Link to="/home">
        <button>submit</button>
      </Link>
    </div>
  );
}
export default SubmitForm;
