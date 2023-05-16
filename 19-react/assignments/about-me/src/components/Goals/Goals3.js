import React, { useState } from 'react';

export default function Goals3(){
    const [goal, setGoal] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My third goal is ${goal}`)
}
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Goal 3: </label>
            <input type='text' value={goal} onChange={(e) => setGoal(e.target.value)}/>
        </form>
    </div>
    )
}