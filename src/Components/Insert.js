import React, { useState } from "react";
import axios from "axios";

function Insert() {
  // write use state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sclass, setSclass] = useState("");

  // write a function for handleonchange
  const handleOnChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "age") {
      setAge(e.target.value);
    } else if (e.target.id === "sclass") {
      setSclass(e.target.value);
    }
  };
  // write a function for handleonsubmit
  const handleOnSubmit = (e) => {
    // write a fetch function to post the data to the API
    // create a axios post request
    e.preventDefault();
    // alert(name + " " + age + " " + sclass);
    console.log("You clicked submit.");
    axios
      .post("http://localhost:3001/api/insert", {
        name,
        age,
        sclass,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="m-5 flex flex-col space-y-4 container items-center">
      <h1 className="font-bold ">You can insert your stuff</h1>
      <div className="flex items-stretch justify-items-stretch align-middle">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleOnChange}
          value={name}
          className="border-2 border-black"
        />
      </div>

      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleOnChange}
          value={age}
          className="border-2 border-black"
        />
      </div>

      <div>
        <label htmlFor="sclass">Class: </label>
        <input
          type="number"
          name="sclass"
          id="sclass"
          onChange={handleOnChange}
          value={sclass}
          className="border-2 border-black h-10"
        />
      </div>

      <button
        type="Submit"
        onClick={handleOnSubmit}
        className="bg-sky-600 w-1/3 h-16"
      >
        Submit
      </button>
    </div>
  );
}

export default Insert;
