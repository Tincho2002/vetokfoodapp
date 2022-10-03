import { Button, Badge, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount.js';
import Swal from "sweetalert2";
import '../Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  const onAdd = (qty) => {
    Swal.fire({
      icon: 'success',
      title: 'New product added to cart',
      text:`Added ${qty} units of ${product.title} `,
      confirmButtonColor: "#444444"
  });
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={product.pictureUrl} alt="" />
      <h3 className="product-card__name">{product.title}</h3>
      <h4 className="product-card__name">{product.description}</h4>      
      <Container className="d-flex justify-content-center text-center align-middle w-100 mw-50">
        <Badge className="badge bg-success"> $ {product.price}</Badge> 
        <Badge className="badge bg-primary">Stock {product.stock}</Badge>
      </Container>
      <ItemCount stock={product.stock} onAdd={onAdd} initial={1} />
      <Link to={`/item/${product.id}`}>
        <Button variant="success btn-block">
          See Detail
        </Button>
      </Link>
    </article>
  );
};

export default Item;