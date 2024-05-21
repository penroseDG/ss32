import React, { useState } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedEmail(email);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedEmail && (
                <p>{`{email: '${submittedEmail}'}`}</p>
            )}
        </div>
    );
};

export default EmailForm;