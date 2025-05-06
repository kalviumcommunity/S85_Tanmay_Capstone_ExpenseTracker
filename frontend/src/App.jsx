import React from 'react';
import './App.css';
import Small from './component/small';

function App() {
  const expenses = [
    {
      title: "Grocery Shopping",
      amount: 45.99,
      date: "2025-05-05",
      category: "Food",
      description: "Bought fruits, vegetables, and snacks"
    },
    {
      title: "Electricity Bill",
      amount: 120.75,
      date: "2025-05-03",
      category: "Utilities",
      description: "Monthly electricity bill payment"
    },
    {
      title: "Gym Membership",
      amount: 60.00,
      date: "2025-05-01",
      category: "Fitness",
      description: "Monthly subscription for local gym"
    },
    {
      title: "Internet Bill",
      amount: 40.00,
      date: "2025-04-28",
      category: "Utilities",
      description: "Wi-Fi subscription charges"
    },
    {
      title: "Movie Night",
      amount: 25.50,
      date: "2025-04-26",
      category: "Entertainment",
      description: "Cinema tickets and snacks"
    },
    {
      title: "Book Purchase",
      amount: 30.00,
      date: "2025-04-22",
      category: "Education",
      description: "Bought two programming books"
    }
  ];

  return (
    <>
      {expenses.map((expense, index) => (
        <Small
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          category={expense.category}
          description={expense.description}
        />
      ))}
    </>
  );
}

export default App;
