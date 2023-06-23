import "./index.css";
import React from "react";

interface InputSearchProps {
  placeholder: string;
  srcIcon: string;
}

const InputSearch = ({ placeholder, srcIcon }: InputSearchProps) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const searchTerm = event.target.value;
      //Faire quelque chose avec le terme de recherche (pour l'instant console.log)
      // eslint-disable-next-line no-undef
      console.log("Recherche: " + searchTerm);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="placeholder"
        placeholder={placeholder}
        onKeyDown={handleSearch}
      ></input>
      <svg href={srcIcon} className="vector"></svg>
    </div>
  );
};

export default InputSearch;
