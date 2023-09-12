import React from "react";

const BuyItem = ({ product }) => {

  const { img, title, price } = product;

  return (
    <div className="buy__item">
      <img src={img} alt="imagen del producto" className="buy__item__img" />
      <span> {title} </span>
      <strong> {price} </strong>
      <button className="btn buy__btn btn--red">Eliminar</button>
    </div>
  );
};

export default BuyItem;
