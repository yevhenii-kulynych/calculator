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
      {/*{*/}
      {/*   buttons.map((el, i) => {*/}

      {/*     return <Button key={i} value={ el } handler={ buttonHandler }/>*/}
      {/*   })*/}
      {/*}*/}
      <Button value={ 'AC' } type={{type:'cleaner', isSingle: false}} handler={ buttonHandler }/>
      <Button value={ '+/-' } handler={ buttonHandler }/>
      <Button value={ '%' } type={{type:'operator', isSingle: true}} handler={ buttonHandler }/>
      <Button value={ '/' } type={{type:'operator', isSingle: false}} handler={ buttonHandler }/>
      <Button value={ 'MC' } type={'memory'} handler={ buttonHandler }/>
      <Button value={ 'MR' } type={'memory'} handler={ buttonHandler }/>
      <Button value={ 'M-' } type={'memory'} handler={ buttonHandler }/>
      <Button value={ 'M+' } type={'memory'} handler={ buttonHandler }/>
      <Button value={ 7 } type={'number'} handler={ buttonHandler }/>
      <Button value={ 8 } type={'number'} handler={ buttonHandler }/>
      <Button value={ 9 } type={'number'} handler={ buttonHandler }/>
      <Button value={ 'x' } type={{type:'operator', isSingle: false}} handler={ buttonHandler }/>
      <Button value={ 4 } type={'number'} handler={ buttonHandler }/>
      <Button value={ 5 } type={'number'} handler={ buttonHandler }/>
      <Button value={ 6 } type={'number'} handler={ buttonHandler }/>
      <Button value={ '-' } type={{type:'operator', isSingle: false}} handler={ buttonHandler }/>
      <Button value={ 1 } type={'number'} handler={ buttonHandler }/>
      <Button value={ 2 } type={'number'} handler={ buttonHandler }/>
      <Button value={ 3 } type={'number'} handler={ buttonHandler }/>
      <Button value={ '+' } type={{type:'operator', isSingle: false}} handler={ buttonHandler }/>
      <Button value={ 0 } type={'number'} handler={ buttonHandler }/>
      <Button value={ ',' } type={{type:'operator', isSingle: false}} handler={ buttonHandler }/>
      <Button value={ '=' } type={{type:'operator', isSingle: true, action: 'CALCULATE'}} handler={ buttonHandler }/>
    </div>
  )
}