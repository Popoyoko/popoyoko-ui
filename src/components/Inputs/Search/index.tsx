import "./index.css";
import React from "react";
import { Icon } from "../../Icon";

interface InputSearchProps {
  placeholder: string;
}

export const InputSearch = ({
    placeholder,
}: InputSearchProps) => {

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
          const searchTerm = event.target.value;
          //Faire quelque chose avec le terme de recherche (pour l'instant console.log)
          console.log('Recherche: ' + searchTerm);
        }
      };
    
    return (
        <div className="input">
            <input type='text' className='placeholder' placeholder={placeholder} onKeyDown={handleSearch}></input>
            <Icon.Search/>
        </div>
    )
}
