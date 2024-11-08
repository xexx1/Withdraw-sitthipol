import React from 'react';

const WithdrawHistory = ({ transactions }) => {
  return (
    <div className="max-w-md p-4 bg-white shadow-lg rounded-lg w-[500px]">
      <h1 className="text-2xl font-bold mb-4">ประวัติการถอนเงิน</h1>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">ถอน</th>
            <th className="border-b p-2">คงเหลือ</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border-b p-2">{transaction.amount} บาท</td>
                <td className="border-b p-2">{transaction.balanceAfter} บาท</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center text-gray-500 p-2">ไม่มีประวัติการถอนเงิน</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WithdrawHistory;
