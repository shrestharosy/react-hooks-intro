import React from 'react';

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

export function Gif() {
    return (
        <>
            <h1>My Nama Gif</h1>
            <form>
                <input type="text" placeholder={'Search gifs here...'} style={inputStyle} />
                <button type='submit' style={buttonStyle}>Search</button>
            </form>
        </>
    )
}