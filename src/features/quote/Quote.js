import React from "react";
import { useSelector } from "react-redux";

const Quote = () => {
  const quote = useSelector((state) => state.quote.item);
  return (
    <div>
      <div id="text">{quote.text}</div>
      <div id="author">{quote.author}</div>
    </div>
  );
};

export default Quote;
