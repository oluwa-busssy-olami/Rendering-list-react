import React from "react";
import Button from "./Button";
// import AlertButton from "./AlertButton";
import "../styles/styles.css";
import AlertButton from "./AlertButton";

const App = () => {
  return (
    <div>
      {" "}
      {/* <Button /> */}{" "}
      <AlertButton messages={"Playing John Wick 4"}> Play Movie </AlertButton>{" "}
      <AlertButton messages={"Uploading your pictures"}>
        {" "}
        Upload Photo{" "}
      </AlertButton>{" "}
    </div>
  );
};

export default App;
