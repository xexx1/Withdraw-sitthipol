import React, { useState } from 'react';
import './index.css'

const WithdrawPage = ({ onNewWithdraw }) => {
  const [balance, setBalance] = useState(10000); 
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleWithdraw = (withdrawAmount) => {
    if (withdrawAmount > balance -1) {
    alert('จะไม่ให้เหลือสักบาทจริงๆหรอ')
      setError('ยอดเงินไม่เพียงพอ');
      return;
    }
    const newBalance = balance - withdrawAmount;
    setBalance(newBalance);
    setError('');

   
    onNewWithdraw({ amount: withdrawAmount, balanceAfter: newBalance });
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    setError('');
  };

  const handleCustomWithdraw = () => {  
    const customAmount = parseInt(amount);
    if (isNaN(customAmount) || customAmount <= 0) {
      setError('กรุณากรอกจำนวนเงินที่ถูกต้อง');
      return;
    }
    handleWithdraw(customAmount);
    setAmount('');
  };

  return (
    <div className="max-w-md p-4 bg-white shadow-lg rounded-lg w-[500px]">
      <h1 className="text-2xl font-bold mb-4">ระบบถอนเงิน</h1>
      <p className="mb-4">ยอดเงินคงเหลือ: <strong>{balance} บาท</strong></p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[100, 500, 1000, 5000].map((amt) => (
          <button
            key={amt}
            onClick={() => handleWithdraw(amt)}
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            ถอน {amt} บาท
          </button>
        ))}
      </div>
      <input
        type="number"
        placeholder="จำนวนเงินที่ต้องการถอน"
        value={amount}
        onChange={handleInputChange}
        className="w-full p-2 border rounded mb-2"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        onClick={handleCustomWithdraw}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        ถอนเงิน
      </button>
    </div>
  );
};

export default WithdrawPage;
