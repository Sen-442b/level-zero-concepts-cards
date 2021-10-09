import React from 'react'
import { obj } from './Data'
export default function Card() {
    return (
        <div>
            <h1>{obj.hello} </h1>
            <p > Question  </p>
            <p>answer,
            </p>
            <img src="https://picsum.photos/200/300"/>
            <p> by xyz</p>

        </div>
    )
}
