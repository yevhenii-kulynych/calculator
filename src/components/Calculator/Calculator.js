import React from 'react'
import { CalculatorHead } from "../CalculatorHead/CalculatorHead";
import { CalculatorBody } from "../CalculatorBody/CalculatorBody";
import './Calculator.css'


export const Calculator = () => {
  return (
    <div className="calculator">
      <CalculatorHead/>
      <CalculatorBody/>
    </div>
  )
}