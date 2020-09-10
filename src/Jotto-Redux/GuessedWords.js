import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  return <div />;
};

GuessedWord.PropTypes = {
  GuessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      GuessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
