import axios from 'axios';

const GUARDIAN_API_KEY = '853c81a4-ea94-496b-b497-2820ae23b785';
const NEWSAPI_KEY = '999f66b6e6b34747aa948faa2effbb4b';
const NYTIMES_API_KEY = '4GS4GuHAOgeGeKGUvabypAg4XFVdjAbW';

const getArticles = async (filters) => {
    let articles = [];

    if(filters.source === 'newsapi') {
        // Fetch articles from NewsAPI
        try {
            const newsApiResponse = await axios.get(`https://newsapi.org/v2/everything`, {
                params: {
                    apiKey: NEWSAPI_KEY,
                    ...filters,
                },
            });
            articles = [...articles, ...newsApiResponse.data.articles];
        } catch (error) {
            console.error('Error fetching from NewsAPI:', error);
        }
    }

    if(filters.source === 'nytimes') {
        // Fetch articles from The New York Times
        try {
            const nyTimesResponse = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
                params: {
                    'api-key': NYTIMES_API_KEY,
                    ...filters,
                },
            });
            articles = [...articles, ...nyTimesResponse.data.response.docs];
        } catch (error) {
            console.error('Error fetching from The New York Times:', error);
        }
    }

    if(filters.source === 'guardian') {
        // Fetch articles from The Guardian
        try {
        const guardianResponse = await axios.get(`https://content.guardianapis.com/search`, {
            params: {
                'api-key': GUARDIAN_API_KEY,
                ...filters,
            },
        });
        articles = [...articles, ...guardianResponse.data.response.results];
        } catch (error) {
            console.error('Error fetching from The Guardian:', error);
        }
    }
    return articles;
};

export { getArticles };
