import React, { useEffect, useRef, useState } from "react";

import Avatar from "./Avatar";
import SupportWindow from "./SupportWindow";

const SupportEngine = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div ref={ref}>
        <SupportWindow visible={visible}></SupportWindow>
        <Avatar
          onClick={() => setVisible(true)}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
          }}
        ></Avatar>
      </div>
    </>
  );
};

export default SupportEngine;
