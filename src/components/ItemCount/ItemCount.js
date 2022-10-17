import { useState } from 'react';
import '../../utils/products';
import './ItemCount.css';

const ItemCount = ({ onAdd, initial, stock }) => {
  //hook de estado
  const [quantity, setQuantity] = useState(initial);

  //esta función recibe por parámetro un número que se sumará al valor inicial
  //del estado qty. De esta manera podremos sumar y restar con una misma función
  const addProduct = (cant) => {
    setQuantity(quantity + cant);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          //disabled es una propiedad de los inputs y buttons en html, por defecto disabled tiene un valor booleano en true, sin embargo podemos aprovechar que en jsx podemos mezclar html y javascript para aplicar una operación lógica de comparación que devolverá un true si es que el valor inicial y la cantidad son la misma
          //Esto hará que no podamos seguir ejecutando la función para restar
          disabled={quantity === initial}
        >
          -
        </button>
        <span className="count-container__qty">{quantity}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          //en este otro botón, aplico una operación lógica de comparación que devolverá true cuando la cantidad sea igual al stock, esto evitará que pueda seguir sumando. Esto es muy útil porque reduzco el costo computacional ya que evito directamente que se ejecute la función addProduct.
          disabled={quantity === stock}
        >
          +
        </button>
      </div>

      <button
        className="button-warning"
        onClick={() => {
          onAdd(quantity);
        }}
        disabled={stock === 0 ? true : null}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;