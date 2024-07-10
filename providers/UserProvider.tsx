"use client";

import { MyUserContextProvider } from "@/hooks/useUser"; // Ensure the path is correct

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    );
};

export default UserProvider;
