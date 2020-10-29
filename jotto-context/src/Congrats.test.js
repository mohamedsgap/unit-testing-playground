import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Congrats from "./Congrats";
import languageContext from "./contexts/languageContext";
import successContext from "./contexts/successContext";

/**
 * @funtion setup
 * @returns(wrapper with props)
 */

const setup = ({ success, language }) => {
  language = language || "en";
  success = success || false;
  return shallow(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
};

describe("language picker", () => {
  test("correctly rendrs congrats string in English by default", () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
  });
  test("correctly renders congrats string in emoji", () => {
    const wrapper = setup({ success: true, language: "emoji" });
    expect(wrapper.text()).toBe("🎯🎉");
  });
});

test("renders witout errors", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "congrats");
  expect(component.length).toBe(1);
});

test("renders no text with `success  is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success`  is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
