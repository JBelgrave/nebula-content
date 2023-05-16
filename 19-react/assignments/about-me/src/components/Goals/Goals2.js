import React, { useState } from 'react';

export default function Goals2(){
    const [goal, setGoal] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My second goal is ${goal}`)
}
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Goal 2: </label>
            <input type='text' value={goal} onChange={(e) => setGoal(e.target.value)}/>
        </form>
    </div>
    )
}