import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HackerNews() {

    const [news, setNews] = useState([])

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        const response = await axios.get('https://hn.algolia.com/api/v1/search?query=reacthooks')
        setNews(response.data.hits);
        console.log(response.data.hits)
    }

    return (
        <>
            <h1>
                Hacker News
            </h1>
            <ul>
                {
                    news.map((item) => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}