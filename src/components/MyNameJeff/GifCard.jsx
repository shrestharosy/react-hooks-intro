import React, { useContext } from 'react';
import { GifsContext } from './Gif';

export function GifCard() {

    const gif = useContext(GifsContext)
    return (
        <img src={gif.images.downsized_medium.url} alt="" />
    )
}