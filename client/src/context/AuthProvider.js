import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const storedAuth = JSON.parse(localStorage.getItem('auth') || '{}');
    const [auth, setAuth] = useState(storedAuth);

    useEffect((newAuth) => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;