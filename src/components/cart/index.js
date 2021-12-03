import React from "react";
import propTypes from "prop-types";
import "./styles.css";
import CartItem from "../cart-item/index";

function Cart({ cart, onCloseCart, visible, result, quantity }) {
  console.log("Cart");

  return (
    <div className={visible ? "Cart Cart_unvisible" : "Cart"}>
      <div className="Cart__inner">
        <div className="Cart__header">
          <h1 className="Cart__title">Корзина</h1>
          <button className="Cart__btn" onClick={onCloseCart}>
            Закрыть
          </button>
        </div>
        <ul className="Cart__list">
          {cart.map((item, index) => (
            <CartItem item={item} key={item.code} index={index} />
          ))}
        </ul>
        <div className="Cart__total">
          <div className="Cart__total-title">Итого</div>
          <div className="Cart__total-result">
            {new Intl.NumberFormat("ru-RU").format(result) + " \u20bd"}
          </div>
          <div className="Cart__total-quantity">{quantity + " шт."}</div>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: propTypes.arrayOf(propTypes.object).isRequired,
};

Cart.defaultProps = {
  cart: [],
};

export default React.memo(Cart);
