import React, { createContext, useContext, useState } from 'react';
import { SortingEnum } from '../apis/types';

interface StateType {
    sortType: SortingEnum;
    setSortType: (sortType: SortingEnum) => void;
}

const initialState: StateType = {
    sortType: SortingEnum.a,
    setSortType: (sortType: SortingEnum) => {},
}

const SortContext = createContext<StateType>(initialState);

export const SortProvider = ({ children }: { children: React.ReactNode }) => {
    const [sortType, setSortType] = useState<SortingEnum>(SortingEnum.a);

    return (
        <SortContext.Provider value={{ sortType, setSortType: (sortType: SortingEnum) => setSortType(sortType) }}>
            {children}
        </SortContext.Provider>
    )
}

export const useSort = () => useContext(SortContext);