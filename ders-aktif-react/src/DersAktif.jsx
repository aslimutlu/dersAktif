import React, { useState } from "react";

function DersAktif() {
  const [width, setwidth] = useState(200);
  const [height, setheight] = useState(200);
  const [inputborderwidth, setinputborderwidth] = useState("");
  const [inputborderheight, setinputborderheight] = useState("");

  const changeSize = () => {
    setwidth(inputborderwidth);
    setheight(inputborderheight);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "tomato",
          border: "2px",
          width,
          height,
        }}
      ></div>

      <label htmlFor="">Width:</label>
      <input type="number" value={inputborderwidth} onChange={(x) => setinputborderwidth(parseInt(x.target.value))} />

      <label htmlFor="">Height:</label>
      <input type="number" value={inputborderheight} onChange={(x) => setinputborderheight(parseInt(x.target.value))}/>

      <button onClick={changeSize}>Change</button>
    </div>
  );
}

export default DersAktif;
