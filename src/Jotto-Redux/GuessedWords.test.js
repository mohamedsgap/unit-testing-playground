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

test("doesn't throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no guessed words", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = setup({GuessedWords: []})
    })
    test("render without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1)
    })
    test("render instructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0)
    })
})

describe("if there are guessed words", ()=> {

})