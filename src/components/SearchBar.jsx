import "../index.css";
import { useState, useRef } from "react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    if (!buttonRef.current.contains(document.activeElement)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your search or submit logic here
  };

  return (
    <div className="input-wrapper">
      <button className="icon" onClick={handleFocus} ref={buttonRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="25px"
          width="25px"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            stroke="#fff"
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            stroke="#fff"
            d="M22 22L20 20"
          ></path>
        </svg>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder={isFocused ? "search.." : ""}
          className={`input ${isFocused ? "focused" : ""}`}
          name="text"
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="submit" className="hidden">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
