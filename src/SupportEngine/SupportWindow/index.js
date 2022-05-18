import React from "react";
import { styles } from "../../Resources/styles";

const SupportWindow = (props) => {
  return (
    <div
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    ></div>
  );
};

export default SupportWindow;
