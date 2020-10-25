import propTypes from "prop-types";

const Input = () => {
  return <div data-test="input-component"></div>;
};

export default Input;

Input.propTypes = {
  secretWord: propTypes.string.isRequired,
};
