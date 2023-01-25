import React, {useEffect,useRef} from 'react'
import Buttons from "./Buttons";
import Quote from "./Quote"
import { Hearts } from "react-loader-spinner";
import { fetchQuote } from "./quoteSlice";
import { useDispatch, useSelector } from "react-redux";

const QuoteBox = () => {
	const effectRan = useRef(false);
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.quote.loading)
	const quote = useSelector((state) => state.quote.item);

	useEffect(() => {
		if(effectRan.current === false){
			dispatch(fetchQuote())
		  console.log("use")
			return () => {
				effectRan.current = true
			}
		}
		
	}, [])

	if(loading){
		return <Hearts height="300" width="300" color="#FED41D" />;
	}
	return (
      <div id="quote-box">
				<div id="left-column">
        <Quote />
        <Buttons />
				</div>
        <img src={quote.image} />
      </div>
  );
}

export default QuoteBox