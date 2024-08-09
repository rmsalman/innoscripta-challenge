import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <div className="articles-list">
            {articles.map((article, i) => (
                <Article key={i} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;
