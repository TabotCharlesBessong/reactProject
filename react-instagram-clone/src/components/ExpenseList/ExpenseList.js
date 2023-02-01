
import React from 'react';
import {Cancel} from '@material-ui/icons'
import Card from './Card';

const ExpenseList = () => {
  const list = [
    {
    title:'Made purchase',
    price:23,
    logo:`<Cancel/>`,
    createdAt:Date.now(),
    }
  ]
  return (
    <div className="">
      {list.length ? 
        list.map((item) => 
          <Card item={item} />
        )
      :
      null
      }
    </div>
  );
};

export default ExpenseList;
