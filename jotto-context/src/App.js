import React from "react";
import hookActions from "./actions/hookActions";

function reducer(state, action) {
  if (action.type === "setSecretWord") {
    return { ...state, secretWord: action.payload };
  } else {
    throw new Error(`invaild action type: ${action.type}`);
  }
}
function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return <div data-test="component-app"></div>;
}

export default App;
