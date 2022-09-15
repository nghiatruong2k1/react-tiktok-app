import { memo, createContext } from 'react';
export const GlobalContext = createContext();
function GlobalState({ children }) {
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
export default memo(GlobalState);
