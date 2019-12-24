import React from 'react';
import { Roulette } from './Roulette';

const options = [
    "war",
    "pain",
    "words",
    "love",
    "life",
];

export const LunchRouletteContext = React.createContext()

export function LunchRoulette() {
    return (
            <LunchRouletteContext.Provider value={options}>
                <Roulette />
            </LunchRouletteContext.Provider>
    )
}
