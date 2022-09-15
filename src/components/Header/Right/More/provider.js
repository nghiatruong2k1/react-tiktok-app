import { memo, createContext } from 'react';
export const MoreContext = createContext();
function MoreProvider({ state, dispath, children }) {
    return (
        <MoreContext.Provider value={{ state, dispath }}>
            {children}
        </MoreContext.Provider>
    );
}
export default memo(MoreProvider);
