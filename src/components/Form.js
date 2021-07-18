import React from "react";

function Form() {
  return (
    <div>
      <div className="nameInput">
        <label htmlFor="nameExpense">Name of the expense</label>
        <input
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense?"
        />
      </div>
      <div className="amountInput">
        <label htmlFor="amountExpense"> Amount</label>
        <input
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
        />
      </div>
      <button type="submit">Add</button>
    </div>
  );
}

export default Form;
