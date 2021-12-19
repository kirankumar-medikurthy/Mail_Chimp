import React from "react";
import "./Buttons.css";

const Button1 = ({ text }) => {
  return (
    <div className="buttons-mk">
      <p className="button1-mk">{text}</p>
    </div>
  );
};

const Button2 = ({ text }) => {
  return (
    <div className="buttons-mk">
      <p className="button2-mk">{text}</p>
    </div>
  );
};

const Button3 = ({ text }) => {
  return (
    <div className="button3-div-mk">
      <p className="button3-mk">{text}</p>
    </div>
  );
};

const Button4 = ({ text }) => {
  return (
    <div className="button4-div-mk">
      <p className="button4-mk">{text}</p>
    </div>
  );
};

export { Button1, Button2, Button3, Button4 };
