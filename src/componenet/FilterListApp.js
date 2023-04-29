import React from "react";
import { peopleExtended } from "../data/people-extended";

const FilterListApp = () => {
  const chemists = peopleExtended.filter(
    (person) => person.profession === "Chemist"
  );
  console.log(chemists);

  const chemistList = chemists.map((Chemist, index) => {
    return (
      <li key={index}>
        <p>
          {" "}
          {Chemist.name} - {Chemist.profession}{" "}
        </p>{" "}
      </li>
    );
  });
  return (
    <div>
      {" "}
      <ul> {chemistList} </ul>{" "}
    </div>
  );
};

export default FilterListApp;
