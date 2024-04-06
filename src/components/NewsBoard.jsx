import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';

export const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const VITE_API_KEY = 'cff55d01cec849fead8a2e52b985fae4';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${VITE_API_KEY}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await response.json();
                setArticles(data.articles);
                setLoading(false);
                setError(null);
            } catch (error) {
                setError('Failed to fetch news. Please try again later.');
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]); 
    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger text-light mb-2 mt-2'>News</span></h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                articles.map((news, index) => (
                    <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} data={news.publishedAt} />
                ))
            )}
        </div>
    );
};
