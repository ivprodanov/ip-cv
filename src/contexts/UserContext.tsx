import React, { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

export type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// To use: in the App.tsx file type the following:

/*
import { UserContextProvider } from '<this directory here>'
import { User } from 'wherever the User tsx file is located''
import './App.css'  - if you have one

function App() {
    return 
        <div className="App">
            <UserContextProvider>
                <User/>
            </UserContextProvider>
        </div>
}

*/
