import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import { ALL_EXPENSES } from "./components/Expenses_data";

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleName = (event) => {
    console.log("Name ", event.target.value);
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setAmount(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (name !== "" && amount > 0) {
      const expense = { name, amount };

      setExpenses([...expenses, expense]);

      setName("");
      setAmount("");
    } else {
      console.log("Invalid input");
    }
  };

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
      <Form
        name={name}
        amount={amount}
        handleName={handleName}
        handleAmount={handleAmount}
        handleSubmitForm={handleSubmitForm}
      />

      <List expenses={expenses} />
    </div>
  );
}

export default App;
