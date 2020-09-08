/**
 *
 * @param {shallowWrapper} wrapper
 * @param {string} val
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
