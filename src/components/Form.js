import React from "react";

function Form({
  name,
  amount,
  handleName,
  handleAmount,
  handleSubmitForm,
  handleClear,
}) {
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="nameInput">
          <label htmlFor="nameExpense">Name of the expense</label>
          <input
            type="text"
            name="name"
            id="expenseName"
            value={name}
            onChange={handleName}
            placeholder="Name of expense?"
          />
        </div>
        <div className="amountInput">
          <label htmlFor="amountExpense"> Amount</label>
          <input
            type="number"
            name="amount"
            id="expenseAmount"
            value={amount}
            onChange={handleAmount}
            placeholder="0.00"
          />
        </div>
        <button type="submit">Add</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default Form;
