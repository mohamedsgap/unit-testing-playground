import React from "react";
import propTypes from "prop-types";

const Input = () => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const submitValue = (e) => {
    e.preventDefault();
    setCurrentGuess("");
  };
  return (
    <div data-test="input-component">
      <form className="form-inline">
        <input
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={submitValue}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;

Input.propTypes = {
  secretWord: propTypes.string.isRequired,
};
