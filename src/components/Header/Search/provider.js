import { memo, createContext } from 'react';
export const SearchContext = createContext();
function SearchProvider({ children, ...props }) {
    return <SearchContext.Provider value={{ ...props }}>{children}</SearchContext.Provider>;
}
export default memo(SearchProvider);
