import React, { useState } from 'react';
interface User {
    name: string;
    email: string;
    password: string;
}
const AccountForm = () => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (user.password !== confirmPassword) {
            alert('Mật khẩu và Nhập lại mật khẩu không khớp!');
            return;
        }
        console.log(user);
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Tên:</label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
                    <br />
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
            </form>
        </div>
    );
};
export default AccountForm;
