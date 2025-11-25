'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { RootStore } from './RootStore';

const StoreContext = createContext<RootStore | null>(null);

interface IStoreProviderProps {
    children: ReactNode;
    store: RootStore;
}

export const StoreProvider: React.FC<IStoreProviderProps> = ({ children, store }) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = (): RootStore => {
    const store = useContext(StoreContext);
    if (!store) {
        throw new Error('useStore must be used within StoreProvider');
    }
    return store;
};

