import React, { useState } from 'react';

import axios from '../../utils/axios'
import { GifCard } from './GifCard';

const inputStyle = {
    height: '30px',
    width: '250px',
    marginRight: '10px',
    fontSize: '14px',
}

const buttonStyle = {
    height: '40px',
    width: '86px',
    background: 'cornflowerblue',
    border: '1px solid white',
    borderRadius: '50px',
    fontSize: '14px',
    color: 'white'
}

export const GifsContext = React.createContext();

export function Gif() {
    const [query, setQuery] = useState('smile');
    const [gifsList, setGifsList] = useState([]);

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`/gifs/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}`)
        setGifsList(response.data.data)
    }

    return (
        <>
            <h1>My Nama Gif</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'Search gifs here...'} name={'query'} onChange={handleQueryChange} value={query} style={inputStyle} />
                <button type='submit' style={buttonStyle}>Search</button>
            </form>

            {
                gifsList.length <= 0 ? 'No gifs found' :
                    gifsList.map((gif) => (
                        <span key={gif.id}>
                            <GifsContext.Provider value={gif} >
                                <GifCard />
                            </GifsContext.Provider>
                        </span>
                    ))

            }

        </>
    )
}