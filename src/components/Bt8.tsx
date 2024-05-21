import React, { useState } from 'react';

const HobbiesForm = () => {
    const [hobbies, setHobbies] = useState<string[]>([]);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter(hobby => hobby !== value));
        }
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Sở thích được chọn: ${hobbies.join(', ')}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="checkbox"
                    value="Đá bóng"
                    checked={hobbies.includes('Đá bóng')}
                    onChange={handleCheckboxChange}
                />
                Đá bóng
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    value="Chơi game"
                    checked={hobbies.includes('Chơi game')}
                    onChange={handleCheckboxChange}
                />
                Chơi game
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    value="Người yêu"
                    checked={hobbies.includes('Người yêu')}
                    onChange={handleCheckboxChange}
                />
                Người yêu
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    value="Mèn mén"
                    checked={hobbies.includes('Mèn mén')}
                    onChange={handleCheckboxChange}
                />
                Mèn mén
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    value="Pịa"
                    checked={hobbies.includes('Pịa')}
                    onChange={handleCheckboxChange}
                />
                Pịa
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default HobbiesForm;
