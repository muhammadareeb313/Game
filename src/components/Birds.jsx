import * as React from "react";
import Custom from "./custom";

const birds = ["fly", "sparrow", "hawk", "crow", "piegon","owl","parrot","Dove","hen","duck"];

function Birds() {
  return (
    <>
     <div style={{ textAlign: "center" }}>
      <Custom heading={"Birds"} arr={birds} navi={'/'}/>
      </div>
    </>
  );
}

export default Birds;

