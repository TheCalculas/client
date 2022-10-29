import React from "react";
import { Link } from "react-router-dom";
function LoginType() {
  return (
    <div>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action active"
        ></button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          <Link to="/login/parent">Parent</Link>
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          <Link to="/login/admin">Admin</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginType;
