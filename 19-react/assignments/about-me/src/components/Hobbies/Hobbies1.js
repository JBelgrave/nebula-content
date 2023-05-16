import React, { useState } from 'react';

export default function Hobbies1(){
    const [hobby, setHobby] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My first hobby is ${hobby}`)
}
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Hobby 1: </label>
            <input type='text' value={hobby} onChange={(e) => setHobby(e.target.value)}/>
        </form>
    </div>
    )
}