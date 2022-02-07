
import React, { useState } from 'react';
import {Search,  Add, ArrowLeft, ChevronLeft, Cancel} from '@material-ui/icons'
import './styles.css'

const TopFold = () => {
  const [query,setQuery] = useState('') 
  const handleQuery = (e)=>{
    setQuery(e.target.value)
  }
  return (
    <div className="topfold">
    {window.location.pathname ==='/' ?
         <div className="home-topfold">
       <div className="searchbar">
         <Search className='icon' />
         <input type="text" placeholder='search for expeses'  
         value = {query}  onChange={(e)=> handleQuery(e) } />
       </div>
       <div className="add-btn">
         <Add className='icon' />
         <label htmlFor="">Add</label>
       </div>
     </div>
     :
     <div className="add-topfold">
       <div className="add-topfold-btn">
         <ChevronLeft className='icon' />
         <label htmlFor="">Back</label>
       </div>
       <div className="add-topfold-btn">
         <Cancel className='icon' />
         <label htmlFor="">Cancel</label>
       </div>
     </div>
     }
      
    </div>
  );
};

export default TopFold;
