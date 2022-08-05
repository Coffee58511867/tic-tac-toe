import React from 'react'
import '../App.css'

export default function Square(props){
    return(
         <>
            <button className="btns" onClick={() => props.onClick()}>{props.value}</button>
         </>
    )
}