import React, { useState } from 'react';
import WithdrawPage from './WithdrawPage';
import WithdrawHistory from './WithdrawHistory';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  
  const handleNewWithdraw = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center space-x-8 p-4">
      <WithdrawPage onNewWithdraw={handleNewWithdraw} />
      <WithdrawHistory transactions={transactions} />
    </div>
  );
};

export default App;
