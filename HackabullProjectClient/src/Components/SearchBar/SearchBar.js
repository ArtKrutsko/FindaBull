import './SearchBar.css';
import {React} from 'react';


export const SearchBar = () => {
    return (
      <div className="SearchBar">
        <input placeholder="Find a project"/>
        <button className="SearchButton">Search</button>
      </div>
    )
} 