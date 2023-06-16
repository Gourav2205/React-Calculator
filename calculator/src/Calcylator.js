/* eslint-disable */
import React, { useState } from 'react';
import './Calculator.css'


function Calculator() {
    const [value, setValue] = useState('');

    function handleClick(event) {
        // Update input field value when user clicks a button
        setValue(value + event.target.value);
    }

    function handleClear() {
        // Clear input field
        setValue('');
    }

    function handleCalculate() {
        try {
            // Calculate result and update input field with result
            const result = eval(value);
            setValue(result.toString());
        } catch (error) {
            // Handle errors in calculation
            setValue('Error');
        }
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='main'>
            <h1>Calculator</h1>
            <div className='input'>
            <input type="text" value={value} onChange={onChange} />
            </div>
            <br />
            <button onClick={handleClick} value="1">1</button>
            <button onClick={handleClick} value="2">2</button>
            <button onClick={handleClick} value="3">3</button>
            <button onClick={handleClick} value="+">+</button>
            <br />
            <button onClick={handleClick} value="4">4</button>
            <button onClick={handleClick} value="5">5</button>
            <button onClick={handleClick} value="6">6</button>
            <button onClick={handleClick} value="-">-</button>
            <br />
            <button onClick={handleClick} value="7">7</button>
            <button onClick={handleClick} value="8">8</button>
            <button onClick={handleClick} value="9">9</button>
            <button onClick={handleClick} value="*">*</button>
            <br />
            <button onClick={handleClear}>C</button>
            <button onClick={handleClick} value="0">0</button>
            <button onClick={handleCalculate} >=</button>
            <button onClick={handleClick} value="/">/</button>
        </div>
    );
}

export default Calculator;
