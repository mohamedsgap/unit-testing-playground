import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

/**
 * @returns(shallow wrapper)
 */
const setup = () => {
  return shallow(<App />);
};

test("Render App component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
