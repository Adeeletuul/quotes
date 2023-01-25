import React from "react";
import { useDispatch } from "react-redux";
import { fetchQuote } from "./quoteSlice";

const NewQuote = () => {
  const dispatch = useDispatch();
  return (
    <button id="new-quote" onClick={() => dispatch(fetchQuote())}>
      New quote
    </button>
  );
};

export default NewQuote;
