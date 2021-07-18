import React from "react";

const List = ({ expenses }) => {
  return (
    <div>
      <ul>
        {expenses.map((item) => (
          <li key={item.id}>
            {item.name} - $ {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
