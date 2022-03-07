
import React, { useState } from 'react'
import './_category.scss'

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

const Category = () => {

  const [active,setActive] = useState('All')

  const handleClick = (value)=>{
    setActive(value)
  }
  return (
    <div className="categoriesBar">
      {
        keywords.map((value,index)=> (
          <span key={index}
            onClick={()=> handleClick(value) }
            className={active === value ? 'active' : ''}
           >
            {value}
          </span>
        ) )
      }
    </div>
  )
}

export default Category