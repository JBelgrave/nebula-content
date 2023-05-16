import React, { useState } from 'react';

export default function Hobbies2(){
    const [hobby, setHobby] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My second hobby is ${hobby}`)
}
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Hobby 2: </label>
            <input type='text' value={hobby} onChange={(e) => setHobby(e.target.value)}/>
        </form>
    </div>
    )
}