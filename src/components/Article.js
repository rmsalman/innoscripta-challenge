import React from 'react';

const Article = ({ article }) => {
    return (
        <div className="article-item">
            <h2 className="article-title"><a href={article.url || article.webUrl || article.web_url} target="_blank" rel="noopener noreferrer"> {article.title || article.webTitle || article.headline.main } </a> </h2>
            <p>{article.description || article.lead_paragraph}</p>
        </div>
    );
};

export default Article;
