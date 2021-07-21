import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
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
          <TextField
            className="standard-basic"
            label="Insert the name of the expense"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="amountInput">
          <TextField
            className="standard-basic"
            label="Insert the amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <div className="buttons">
          <Button variant="outlined" type="submit">
            Add
          </Button>
          <Button variant="outlined" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
