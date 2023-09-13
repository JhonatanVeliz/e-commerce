import React from "react";

const BuyItem = ({ product, deleteProduct }) => {

  const { img, title, price } = product;

  return (
    <div className="buy__item">
      <img src={img} alt="imagen del producto" className="buy__item__img" />
      <span> {title} </span>
      <strong>Q {price}.00</strong>
      <button className="btn buy__btn btn--red"
        onClick={()=> deleteProduct(product)}
      >Eliminar</button>
    </div>
  );
};

export default BuyItem;
