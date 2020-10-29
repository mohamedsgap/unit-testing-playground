import { shallow } from "enzyme";

import { GuessedWordsProvider, useGuessedWords } from "./guessedWordsContext";

const FunctionalComponent = () => {
  useGuessedWords();
  return <div />;
};

test("useGuessedWords throws error  when not wrapped in guessedWordsProvider", () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow("useGuessedWords must be used in GuessedWordsProvider");
});

test("useGuessedWords does not throw error when wrappped in GuessedWordsProvider", () => {
  expect(() => {
    shallow(
      <GuessedWordsProvider>
        <FunctionalComponent />
      </GuessedWordsProvider>
    );
  }).not.toThrow();
});
