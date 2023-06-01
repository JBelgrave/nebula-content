import React from 'react'
import './Animal.css'

export default function Person(props) {
    return (
        <div class='card'>
            <h2 class='species'>{props.species}</h2>
            <h3 class='averageAge'>Average Age: {props.averageAge}</h3>
            <h3 class='color'>Common Colors: {props.commonColors}</h3>
        </div>
    )
}