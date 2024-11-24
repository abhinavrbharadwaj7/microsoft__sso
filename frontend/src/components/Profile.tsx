import React, { useState } from 'react';
import './Profile.css';

interface ProfileProps {
    name: string;
    email: string;
    phone: string;
    avatarUrl: string;
    onUpdate: (updatedUser: { name: string; email: string; phone: string; avatarUrl: string }) => void;
    onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ name, email, phone, avatarUrl, onUpdate, onLogout }) => {
    const [editName, setEditName] = useState(name);
    const [editEmail, setEditEmail] = useState(email);
    const [editPhone, setEditPhone] = useState(phone);
    const [editAvatarUrl, setEditAvatarUrl] = useState<string | null>(null); // No avatar initially
    const [uploadedAvatar, setUploadedAvatar] = useState<File | null>(null);

    const handleUpdate = () => {
        onUpdate({ name: editName, email: editEmail, phone: editPhone, avatarUrl: editAvatarUrl ?? avatarUrl });
    };

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedAvatar(file);
            setEditAvatarUrl(URL.createObjectURL(file)); // Show the uploaded image temporarily
        }
    };

    return (
        <div className="profile-background">
            <div className="profile-header">
                <h2>Profile</h2>
                {editAvatarUrl ? (
                    <img
                        src={editAvatarUrl}
                        alt="User Avatar"
                        className="profile-avatar"
                        style={{ width: '100px', borderRadius: '50%' }}
                    />
                ) : (
                    <div className="profile-avatar-placeholder" style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc' }}></div>
                )}
                <div className="profile-input-group">
                    <label className="profile-label">Upload Avatar:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="profile-input"
                    />
                </div>
                <div className="profile-input-group">
                    <label className="profile-label">Name:</label>
                    <input
                        type="text"
                        className="profile-input"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                </div>
                <div className="profile-input-group">
                    <label className="profile-label">Email:</label>
                    <input
                        type="email"
                        className="profile-input"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                    />
                </div>
                <div className="profile-input-group">
                    <label className="profile-label">Phone:</label>
                    <input
                        type="text"
                        className="profile-input"
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                    />
                </div>
                <button className="profile-button" onClick={handleUpdate}>
                    Update Profile
                </button>
                <button className="profile-button" onClick={onLogout} style={{ marginTop: '10px', backgroundColor: '#f44336' }}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
