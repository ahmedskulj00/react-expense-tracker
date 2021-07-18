import React, { useState } from "react";

import "./App.css";
import { ALL_EXPENSES } from "./components/Expenses_data";

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  return (
    <div className="App">
      <div className="title">
        <h2>Expense tracker fam</h2>
        <div>
          <p>
            {" "}
            Total expenses:{" "}
            <div className="total-value">
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount));
              }, 0)}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
