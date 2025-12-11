import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    )

    const signup = (username, password) => {
        const newUser = {username, password};
        localStorage.setItem('user', JSON.stringify(newUser))
        setUser(newUser);
        console.log(newUser);
        return true;
    }

    const login = (username, password) => {

    }

    return (
        <AuthContext.Provider value={{user, signup, login}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)