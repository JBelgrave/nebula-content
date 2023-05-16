import React, { useState } from 'react';

export default function Goals1(){
    const [goal, setGoal] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    alert(`My first goal is ${goal}`)
}
    return (
      <form onSubmit={handleSubmit}>
          <label>Goal 1: </label>
          <input type='text' value={goal} onChange={(e) => setGoal(e.target.value)}/>
      </form>
    )
}