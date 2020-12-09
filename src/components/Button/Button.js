import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Button.css'


export const Button = (props) => {
  return (
    <div className="calculator__btn" onClick={() => props.handler()}>
      { props.value }
    </div>
  )
}