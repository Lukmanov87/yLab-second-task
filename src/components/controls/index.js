import React from "react";
import propTypes from "prop-types";
import pluralRu from "plural-ru";
import "./styles.css";

function Controls({ onShowCart, quantity, result }) {
  console.log("Controls");

  const plural = pluralRu(quantity, "товар", "товара", "товаров");

  return (
    <div className="Controls">
      <p className="Controls__info">
        В корзине:
        <strong>
          {quantity
            ? `${quantity} ${plural} / ${new Intl.NumberFormat("ru-RU").format(
                result
              )} \u20bd`
            : "пусто"}
        </strong>
      </p>
      <button className="Controls__btn" onClick={onShowCart}>
        Перейти
      </button>
    </div>
  );
}

Controls.propTypes = {
  onShowCart: propTypes.func.isRequired,
};

export default React.memo(Controls);
