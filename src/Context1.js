import React, {useEffect, useState, useContext, createContext} from 'react';

export const context1 = createContext(undefined, undefined);

export const Context2 = ({children, session}) => {
    return (
        <context1.Provider value={session}>
            {children}
        </context1.Provider>
    );
};
