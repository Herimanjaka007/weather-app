import { useState } from "react";

export const WeatherForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const isDisabled = !inputValue.trim().length > 0;

    return <>
        <form action="" method="post" className="d-flex gap-1 mb-5" onSubmit={(e) => {
            onSubmit(e);
            setInputValue('');
        }}>
            <input
                type="text"
                name="city"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="form-control"
                placeholder="Find city or country"
            />

            <button className="btn btn-primary" disabled={isDisabled}>Search</button>
        </form >
    </>
};