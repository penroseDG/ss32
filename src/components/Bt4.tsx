// src/ProgressForm.tsx

import React, { useState } from 'react';

const ProgressForm = () => {
    const [progress, setProgress] = useState<number>(50); // Giá trị mặc định là 50
    const [submittedValue, setSubmittedValue] = useState<number | null>(null);
    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(Number(event.target.value));
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedValue(progress);
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="progressRange">Tiến độ hoàn thành công việc:</label>
                <br />
                <input
                    type="range"
                    id="progressRange"
                    name="progress"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleRangeChange}
                    style={{ width: '300px', margin: '20px 0' }}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {submittedValue !== null && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Giá trị đã nhập: {submittedValue}</h2>
                </div>
            )}
        </div>
    );
};
export default ProgressForm;
