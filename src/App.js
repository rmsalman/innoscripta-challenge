import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import { getArticles } from './services/api';
import "./App.css";

const App = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const handleSearch  = async (params) => {
        setLoading(true);
        try {
            const fetchedArticles = await getArticles(params);
            setArticles(fetchedArticles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="container">
            <h1>News & Articles</h1>
            <SearchBar onSearch={handleSearch}  />

            {loading ? (
                <p>Loading...</p>
            ) : (
                articles.length ? (<ArticleList articles={articles} />) : 'Wanna see the news? Hit the search button!' 
            )}

        </div>
    );
};

export default App;
