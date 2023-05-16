import React, { useState } from 'react';

export default function Hobbies3(){
    const [hobby, setHobby] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My third hobby is ${hobby}`)
}
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Hobby 3: </label>
            <input type='text' value={hobby} onChange={(e) => setHobby(e.target.value)}/>
        </form>
    </div>
    )
}