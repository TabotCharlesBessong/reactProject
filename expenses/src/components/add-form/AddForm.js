
import { ArrowDownward } from '@material-ui/icons';
import React, { useState } from 'react';
import { categories } from '../../constant/AddExpense';
import './styles.css'

const AddForm = () => {
  const categori = categories
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState('')
  const [category,setCategory] = useState(null)
  const [open,setOpen] = useState(false)

  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }

  const handleAmount = (e)=>{
    const value = parseFloat(e.target.value)
    if(isNaN(value)){
      setAmount("")
    }else{
      setAmount(value)
    }
    setAmount(e.target.value)
  }

  const handleCategory = (cate)=>{
    setCategory(cate)
    setOpen(false)
  }

  return(
    <div className="add-form">
      <div className="form-item">
        <label htmlFor="">Title</label>
        <input type="text" placeholder='give a name to your expenditure' value={title} onChange={(e)=> handleTitle(e) } />
      </div>
      <div className="form-item">
        <label htmlFor="">Amount ₤ </label>
        <input className='amount-input' type="text" placeholder='what was the amount' value={amount} onChange={(e)=> handleAmount(e)} />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div className="category-dropdown">
            <label htmlFor="">Category 
            <ArrowDownward onClick={()=> setOpen(!open) } />
            </label>
          </div>
          {
            open && 
            <div className="category-container">
              {categori.map(cat =>{
                <div className="category-item" style={{borderRight:`5px solid ${cat.color} `}} key={cat.id} onClick={(e)=> handleCategory(e) } >
                  <label htmlFor="">
                    {cat.title}
                  </label>
                  <img src={cat.icon} alt={cat.title} />
                </div>
              })}
            </div>
          }
        </div>
      </div>
    </div>
    );
};

export default AddForm;
