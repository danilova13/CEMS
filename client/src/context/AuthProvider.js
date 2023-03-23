import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loginString, setLoginString] = useState("Login");

    return (
        <AuthContext.Provider value={{ auth, setAuth, loginString, setLoginString }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;