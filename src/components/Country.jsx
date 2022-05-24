import * as React from "react";
import Custom from "./custom";

const country = ["kenya", "china", "usa", "turkey", "muscat","russia","pakistan","india","england","afghanistan"];

function Country() {
  return (
    <>
     <div style={{ textAlign: "center" }}>
      <Custom heading={"Country"} arr={country} navi={'/birds'} />
      </div>
    </>
  );
}

export default Country;


