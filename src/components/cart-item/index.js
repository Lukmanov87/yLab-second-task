import React from "react";
import propTypes from "prop-types";
import "./styles.css";

function CartItem({ item, index }) {
  console.log("CartItem " + item.code);

  return (
    <li className="Cart__item">
      <div className="Cart__left-container">
        <div className="Cart__item-index">{index + 1}</div>
        <div className="Cart__item-name">{item.title}</div>
      </div>
      <div className="Cart__right-container">
        <div className="Cart__item-price">
          {new Intl.NumberFormat("ru-RU").format(item.price) + " \u20bd"}
        </div>
        <div className="Cart__item-quantity">{item.quantity + " шт."}</div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: propTypes.exact({
    code: propTypes.number,
    title: propTypes.string,
    price: propTypes.number,
    quantity: propTypes.number,
  }).isRequired,
};

export default React.memo(CartItem);
