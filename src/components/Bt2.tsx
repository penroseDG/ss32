import React, { useState } from 'react';

const ColorForm = () => {
    const [color, setColor] = useState('#000000');
    const [submittedColor, setSubmittedColor] = useState<string | null>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedColor(color);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Màu sắc</label>
                <input
                    type="color"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedColor && (
                <p>{`Color: ${submittedColor}`}</p>
            )}
        </div>
    );
};
export default ColorForm;