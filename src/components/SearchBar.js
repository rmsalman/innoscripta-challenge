import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [q, setKeyword] = useState('');
    const [source, setSource] = useState('guardian');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ q, source, date });
    };

    return (
        <div className="filter-container">
            <form id="filter-form" onSubmit={handleSubmit}>
                <div className="filter-group">
                    <label>Search:</label>
                    <input type="text" id="search" name="search" placeholder="Search articles..." value={q} onChange={(e) => setKeyword(e.target.value)} />
                </div>
                <div className="filter-group">
                    <label>Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="filter-group">
                    <label>Source:</label>
                    <select id="source" name="source" onChange={(e) => setSource(e.target.value)}>
                    <option  value="guardian">The Guardian</option>
                    <option value="newsapi">NewsAPI</option>
                    <option value="nytimes">New York Times</option>
                </select>
                </div>
                <div className="filter-group filterButton">
                    <button type="submit">Filter</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
