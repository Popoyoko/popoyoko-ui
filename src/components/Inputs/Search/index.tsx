import "./index.css";
import React from "react";

interface InputSearchProps {
  placeholder: string;
  srcIcon: string;
}

export const InputSearch = ({
    placeholder,
    srcIcon,
}: InputSearchProps) => {

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
          const searchTerm = event.target.value;
          //Faire quelque chose avec le terme de recherche (pour l'instant console.log)
          console.log('Recherche: ' + searchTerm);
        }
      };
    
    return (
        <div>
            <input type='text' className='placeholder' placeholder={placeholder} onKeyDown={handleSearch}></input>
            <svg href={srcIcon} className='vector'></svg>
        </div>
    )
}
