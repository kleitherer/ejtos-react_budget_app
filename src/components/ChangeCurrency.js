import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



const ChangeCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;

    // Dispatch an action to change the currency in your context
    dispatch({
      type: 'CHANGE_CURRENCY',
      payload: newCurrency
    });
  };

  return (
    <div style={{ backgroundColor: '#a3c4a7' , padding: '20px', borderRadius: '9px' }}>
  <label htmlFor="currency-dropdown" style={{ marginRight: '10px' }}>Currency </label>
  <select
    id="currency-dropdown"
    value={currency}
    onChange={handleCurrencyChange}
    style={{
      padding: '5px 10px',
      fontSize: '16px'
    }}
  >
    <option value="USD">$ Dollar</option>
    <option value="GBP">£ Pound</option>
    <option value="EUR">€ Euro</option>
    <option value="JPY">₹ Rupee</option>
  </select>
</div>
  );
}


export default ChangeCurrency;