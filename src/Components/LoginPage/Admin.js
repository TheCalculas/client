import React from "react";

function Admin() {
  return (
    <div className="container p-11">
      <h1 className="text-3xl my-11">Admin Login Form</h1>
      <form>
        <div className="form-outline mb-4">
          <input type="text" id="username" className="form-control" />
          <label className="form-label" for="username">
            User Name (must be unique)
          </label>
        </div>
        <div className="form-outline mb-4">
          <input type="password" id="password" className="form-control" />
          <label className="form-label" for="password">
            Password
          </label>
        </div>

        <button type="button" className="btn bg-sky-500">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Admin;
