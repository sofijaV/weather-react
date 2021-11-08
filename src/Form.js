import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <form className="Form">
      <div className="row">
        <div className="col-md-4">
          <input type="text" placeholder="Enter city name..."></input>
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-outline-secondary">
            Search
          </button>
        </div>
        <div className="col-md-5">
          <button type="button" className="btn btn-outline-secondary">
            My Location
          </button>
        </div>
      </div>
    </form>
  );
}
