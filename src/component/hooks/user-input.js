import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
  message: "",
};
const reducerFunc = (state, action) => {
  if (action.type === "input") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "blur") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "reset") {
    return { value: "", isTouched: false };
  }

  return initialState;
};

const useInput = (validateValue) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "input", value: e.target.value });
  };
  const inputBlurHandler = (e) => {
    dispatch({ type: "blur" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
