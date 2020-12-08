import React from 'react'
import { Button } from "../Button/Button";
import './CalculatorBody.css'



export const CalculatorBody = () => {

  const buttons = ['AC', '+/-', '%', '+', 'MC', 'MR', 'M-', 'M+', 7, 8, 9,'x', 4, 5, 6, '/', 1, 2, 3, '+', 0, ',', '=']

  function buttonHandler() {
    console.log(this)
  }

  return (
    <div className="calculator__body">
      {
         buttons.map((el, i) => {

           return <Button key={i} value={ el } handler={ buttonHandler }/>
         })
      }
    </div>
  )
}