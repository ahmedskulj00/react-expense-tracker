import React from "react";

const List = ({ expenses }) => {
  return (
    <div className="list">
      <ul>
        {expenses.map((item) => (
          <li key={item.id} className="list-elements">
            <div className="item-name">{item.name}</div>{" "}
            <div className="item-amount">${item.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
