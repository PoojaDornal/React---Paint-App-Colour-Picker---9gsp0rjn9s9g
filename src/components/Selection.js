import React ,{useState} from "react";

export default function Selection({applyColor }) {
  let [color,setColor] = useState ({background : " "});
  return(
    <div classname="fix-box" style={color} onClick={() => applyColor(setColor)}>
     <h2 classneme="sunheading">Selection</h2>
    </div>
);
}

