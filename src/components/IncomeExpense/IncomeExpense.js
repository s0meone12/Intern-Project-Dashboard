import React from 'react'
import './IncomeExpense.css'

export default function IncomeExpense() {
  return (
    <div className='incomeExp'>
        <h3>Income/Expense</h3>
        <div className='flexContainer'>
            <img className='img' src='https://cdn.icon-icons.com/icons2/2645/PNG/512/box_arrow_up_right_icon_160369.png' height={'20px'}></img>
            <span>
            <h2>$22,578.00</h2>
            <p>Total Ammount Expense</p></span>
        </div>
        <div className='flexContainer'>
            <img className='img' src='https://seekicon.com/free-icon-download/box-arrow-in-down-left_1.svg' height={'20px'}></img>
            <span>
            <h2>$5,783.00</h2>
            <p>Total Ammount Income</p>
            </span>
            
        </div>
    </div>
  )
}
