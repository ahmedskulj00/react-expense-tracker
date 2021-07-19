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
          <input
            type="text"
            name="name"
            id="expenseName"
            value={name}
            onChange={handleName}
            placeholder="Insert the name of expense"
          />
        </div>
        <div className="amountInput">
          <input
            type="text"
            name="amount"
            id="expenseAmount"
            value={amount}
            onChange={handleAmount}
            placeholder="Insert the amount"
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn">
            Add
          </button>
          <button onClick={handleClear} className="btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
