import React from "react";
import Button from "./Button";
// import AlertButton from "./AlertButton";
import "../styles/styles.css";
import AlertButton from "./AlertButton";
import Toolbar from "./Toolbar";
import Buttons from "./Buttons";

const App = () => {
  return (
    <div>
      {" "}
      {/* <Button /> */}{" "}
      {/* <AlertButton messages={"Playing John Wick 4"}> Play Movie </AlertButton>{" "}
                  <AlertButton messages={"Uploading your pictures"}>
                    {" "}
                    Upload Photo{" "}
                  </AlertButton>{" "} */}{" "}
      <Buttons />
    </div>
  );
};

export default App;
//passing event handlers as props
