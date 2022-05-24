import * as React from "react";
import Custom from "./custom";
const animals = ["cow", "zebra", "monkey", "lion", "tiger","girrafe","goat","sheep","camel","elephant"];

function Animals() {
  return (
    <div style={{ textAlign: "center" }}>
      <Custom heading={"Animals"} arr={animals} navi={"/country"} />
    </div>
  );
}

export default Animals;
