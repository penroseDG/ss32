import React, { useState } from 'react';
const GenderForm = () => {
    const [gender, setGender] = useState<string>('');
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Giới tính được chọn: ${gender}`);
    };
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="radio"
                    value="Nam"
                    checked={gender === 'Nam'}
                    onChange={handleGenderChange}
                />
                Nam
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Nữ"
                    checked={gender === 'Nữ'}
                    onChange={handleGenderChange}
                />
                Nữ
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Khác"
                    checked={gender === 'Khác'}
                    onChange={handleGenderChange}
                />
                Khác
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};
export default GenderForm;
