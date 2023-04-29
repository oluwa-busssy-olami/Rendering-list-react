import React from "react";
import { people } from "../data/people";

// the data we want to render in our list
//
//forEach, forloop map can be used to loop through an array
//Parent Component
const ListApp = () => {
  return (
    <div>
      {" "}
      <ul>
        {" "}
        {people.map((person, index) => {
          return <li key={index}> {person} </li>;
        })}{" "}
      </ul>{" "}
    </div>
  );
};

export default ListApp;
