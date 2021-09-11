import React from 'react';
import './SearchBar.css'

export const SearchBar = ({placeholder, handleChange}) =>{
    return (
        <div className="search">
            <input type="search"
            placeholder={placeholder} 
            onChange={handleChange}
            />
        </div>
    );
}