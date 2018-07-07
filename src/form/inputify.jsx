import React from "react";
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from "react-bootstrap";

import { computeValidationState } from "./validation";

const Inputify = Input => ({
  input = {},
  children,
  label = "",
  showHint = false,
  type,
  meta = {}
} = {}) => (
  <FormGroup validationState={computeValidationState(meta)}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl componentClass={Input} type={type} {...input}>
      {children}
    </FormControl>
    <HelpBlock>{meta.error}</HelpBlock>
  </FormGroup>
);

export default Inputify;
