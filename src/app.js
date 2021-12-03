import React, { useCallback, useState } from "react";
import Controls from "./components/controls/index";
import List from "./components/list/index";
import Cart from "./components/cart/index";
import Layout from "./components/layout/index";


/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({ store }) {
  console.log("App");

  const [visible, setVisible] = useState(false); 

  const callbacks = {
    onShowCart: useCallback(() => setVisible(true), [store]),
    onHideCart: useCallback(() => setVisible(false), [store]),
    onAddToCart: useCallback((item) => store.addItemToCart(item), [store])    
  };

  // Функция подсчета общего количества и  товаров
  let result = 0;
  let quantity = 0;

  for (const cartItem of store.getState().cart) {
    quantity += cartItem.quantity;
    result += cartItem.quantity * cartItem.price;
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Controls
        onShowCart={callbacks.onShowCart}
        result={result}
        quantity={quantity}
      />
      <List items={store.getState().items} onAdd={callbacks.onAddToCart} />
      {visible && (
        <Cart
          cart={store.getState().cart}
          onCloseCart={callbacks.onHideCart}
          result={result}
          quantity={quantity}
        />
      )}
    </Layout>
  );
}

export default App;
