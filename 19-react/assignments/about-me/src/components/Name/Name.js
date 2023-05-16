import React, { useState } from 'react';

export default function Name(){
    const [name, setName] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My name is ${name}`)
}
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>My Name is </label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    </div>
    )
}