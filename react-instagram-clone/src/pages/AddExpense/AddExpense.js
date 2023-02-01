
import React from 'react';
import AddForm from '../../components/add-form/AddForm';
import TopFold from '../../components/TopFold/TopFold';
import './styles.css'

const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold/>
      <AddForm/>
    </div>
  );
};

export default AddExpense;
