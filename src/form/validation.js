export const computeValidationState = ({ touched, error, warning }) => {
  if (touched && error) return "error";
  if (touched && warning) return "warning";
  return "";
};
