import "./index.css";
import React from "react";
import { Icon } from "../../Icon";

interface InputSearchProps {
  placeholder: string;
}

export const InputSearch = ({
    placeholder,
}: InputSearchProps) => {

    // const handleSearch = (event) => {
    //     if (event.key === 'Enter') {
    //       const searchTerm = event.target.value;
    //       //Faire quelque chose avec le terme de recherche (pour l'instant console.log)
    //       console.log('Recherche: ' + searchTerm);
    //     }
    //   };

    // onKeyDown={handleSearch}
    
    return (
        <div className="input">
            <input type='search' className='placeholder' placeholder={placeholder}></input>
            <Icon.Search/>
        </div>
    )
}
