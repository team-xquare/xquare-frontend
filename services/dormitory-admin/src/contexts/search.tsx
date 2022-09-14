import React, { createContext, useContext, useEffect, useState } from 'react';
import { createFuzzyPattern } from '../libs/utils';

interface StateType {
    query: string;
    pattern: RegExp;
    setQuery: (query: string) => void;
}

const initialState: StateType = {
    query: "",
    pattern: createFuzzyPattern(""),
    setQuery: () => {},
}

const SearchContext = createContext<StateType>(initialState);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [query, setQuery] = useState<string>("");
    const [pattern, setPattern] = useState<RegExp>(createFuzzyPattern(""));

    useEffect(() => {
        setPattern(createFuzzyPattern(query));
    }, [query]);

    return (
        <SearchContext.Provider value={{ query, setQuery: (query: string) => setQuery(query), pattern }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext);