import React from "react";

const List = ({ expenses }) => {
  return (
    <div className="list">
      <ul>
        {expenses.map((item) => (
          <li key={item.id} className="list-elements">
            {item.name} - ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
