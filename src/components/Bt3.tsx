import React, { useState } from 'react';

const DateForm = () => {
    const [date, setDate] = useState('');
    const [submittedDate, setSubmittedDate] = useState<string | null>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedDate(date);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Ngày sinh</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedDate && (
                <p>Ngày sinh: {submittedDate}</p>
            )}
        </div>
    );
};
export default DateForm;

