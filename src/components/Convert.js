import React, { useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New Language");
  }, [language, text]);
  return <div />;
};

export default Convert;
