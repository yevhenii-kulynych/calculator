import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './CalculatorHead.css'


export const CalculatorHead = () => {

  const value = useSelector(state => state.value)
  console.log(value, 'STATE')
  return (
    <div className="calculator__head">
      <p>{ value }</p>
    </div>
  )
}