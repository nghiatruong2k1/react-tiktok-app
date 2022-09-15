import { memo, createContext } from 'react';
export const AuthContext = createContext();
function AuthProvider({ state, dispath, children }) {
    return (
        <AuthContext.Provider value={{ state, dispath }}>
            {children}
        </AuthContext.Provider>
    );
}
export default memo(AuthProvider);
