// src/components/Login.tsx
import '../App.css';
import React, { useState } from 'react';
import publicClientApplication from '../msalInstance'; // Import the MSAL instance
import { Button, Divider, Form, Input, Typography } from 'antd';
import { FaMicrosoft } from "react-icons/fa";
import { config } from '../Config'; // Import the config object from Config.ts


interface LoginProps {
    onLogin: (userInfo: { name?: string; email?: string; avatarUrl?: string }) => void;
}

interface User {
    name?: string;
    email?: string;
    avatarUrl?: string;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);
        try {
            const loginResponse = await publicClientApplication.loginPopup({
                scopes: config.scopes,
                prompt: 'select_account',
            });
            setIsAuthenticated(true);
            const userInfo = {
                name: loginResponse.account?.name,
                email: loginResponse.account?.username,
                avatarUrl: 'https://i.pravatar.cc/150?img=5', // Example avatar URL
            };
            setUser(userInfo);
            onLogin(userInfo); // Pass userInfo back to App through onLogin
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="background">
            <div className="App-header">
                <Typography.Title level={2}>Welcome</Typography.Title>
                {loading ? (
                    <p>Loading...</p>
                ) : isAuthenticated ? (
                    <div>
                        <p>Welcome, {user?.name || 'User'}!</p>
                        <p>Successfully logged in with Microsoft.</p>
                    </div>
                ) : (
                    <Form className="login-form">
                        <Form.Item label="Username" name="username">
                            <Input placeholder="Enter Your Name" />
                        </Form.Item>
                        <Form.Item label="Email Address" name="email">
                            <Input placeholder="Enter Your Email" />
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                            <Input.Password placeholder="Enter Your Password" />
                        </Form.Item>
                        <Button block>SIGN IN</Button>
                        <Divider>Or Login With</Divider>
                        <div className="social">
                            <FaMicrosoft className="socialicons" onClick={login} />
                        </div>
                    </Form>
                )}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default Login;
