import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function HackerNews() {

    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('react hooks');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const searchInputRef = useRef();

    useEffect(() => {
        getNews();
    }, []);
    // }, [query]);
    
    // call useEffect on each query change

    const getNews = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
            setNews(response.data.hits);
        }
        catch (error) {
            setError(error)
        }
        setIsLoading(false);

    }

    const handleSearch = (event) => {
        event.preventDefault();
        getNews();
    }

    const handleClearSearch = () => {
        setQuery('');
        searchInputRef.current.focus();
    }

    return (
        <>
            <h1>
                Hacker News
            </h1>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Keywords...' onChange={(event) => setQuery(event.target.value)} value={query} ref={searchInputRef} />
                <button type='submit' >Search</button>
                <button type='button' onClick={handleClearSearch}>Clear</button>

            </form>
            {
                isLoading ? 'Loading...' :
                    <ul>
                        {
                            news.map((item) => (
                                <li key={item.objectID}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
            }
            {
                error && <div> {error.message}</div>
            }
        </>
    )
}