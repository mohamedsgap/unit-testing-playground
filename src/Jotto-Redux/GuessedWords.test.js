import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
    GuessedWords: [{ GuessedWord: "train", letterMatchCount: 3 }],
  },
;

const setup = (porps = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

TextDecoderStream("doesn't throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});
