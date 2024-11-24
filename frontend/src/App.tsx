// src/App.tsx
import React, { useEffect, useState } from 'react';
import msalInstance from './msalInstance';
import Profile from './components/Profile';
import Login from './components/Login';

interface User {
    name?: string;
    email?: string;
    phone?: string;
    avatarUrl?: string;
}

const App: React.FC = () => {
    const [isMsalInitialized, setIsMsalInitialized] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const initMsal = async () => {
            await msalInstance.initialize();
            setIsMsalInitialized(true);
        };
        initMsal();
    }, []);

    const handleLogin = (userInfo: User) => {
        setIsAuthenticated(true);
        setUser(userInfo);
    };

    const handleUpdateProfile = (updatedUser: User) => {
        setUser(updatedUser); // Update user state with new details
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null); // Clear user state on logout
    };

    return (
        <div className="App">
            {isAuthenticated && user ? (
                <Profile
                    name={user.name ?? "No name provided"}
                    email={user.email ?? "No email provided"}
                    phone={user.phone ?? "No phone number provided"}
                    avatarUrl={user.avatarUrl ?? "https://i.pravatar.cc/150?img=5"}
                    onUpdate={handleUpdateProfile}
                    onLogout={handleLogout}
                />
            ) : (
                <Login onLogin={handleLogin} /> // Correct JSX syntax here
            )}
        </div>
    );
};

export default App;
