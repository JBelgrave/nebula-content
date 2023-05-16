import React, { useState } from 'react';

export default function FavoriteColorInput(){
    const [color, setColor] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My favorite color is ${color}`)
}
    return (
    <form onSubmit={handleSubmit}>
        <label>My Favorite Color is </label>
        <input type='text' value={color} onChange={(e) => setColor(e.target.value)}/>
        <input type='submit'/>
    </form>
    )
}