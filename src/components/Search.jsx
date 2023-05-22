import React, { useState } from 'react';
import axios from 'axios';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    try {
      const response = await axios.get(
        'http://cdn-api.co-vin.in/api/v2/admin/location/states'
      );

      const states = response.data.states;
      const filteredResults = states.filter((state) =>
        state.state_name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.log('Error fetching states:', error);
    }
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="searchInput"
      />
      <ul className="resultsContainer">
        {searchResults.map((state) => (
          <li key={state.state_id}>{state.state_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;