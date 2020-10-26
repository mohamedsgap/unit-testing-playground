import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";
import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

/**
 * @returns(mount wrapper)
 */
const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />);
};

test("Render App component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecrectWord", () => {
    setup();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});
