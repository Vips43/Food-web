import React, { useState } from 'react'

function FindMeal({ onChange }) {

    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (onChange) onChange(value);
    }
  return (
    <>
    <div className="rounded-md">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for meals..."
          className="w-full px-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

      </div>
    </>
  )
}

export default FindMeal