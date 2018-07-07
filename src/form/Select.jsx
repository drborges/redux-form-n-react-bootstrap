import React from "react";

import inputify from "./inputify";

const Select = ({ children, ...props }) => (
  <select {...props}>{children}</select>
);

export default inputify(Select);
