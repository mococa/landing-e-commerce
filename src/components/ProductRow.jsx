import React from "react";

function ProductRow({title, img, description, price}) {
  const moneyfy = (c, currency="$") =>{
    var _num = new Number(c).toLocaleString("pt-BR");
    if (_num.includes(",")) {
        if (_num.split(",")[1].length > 1) {
            _num = _num.substring(0, _num.indexOf(",") + 3)
        } else {
            if (!_num.endsWith("0")) {
                _num += 0
            }
        }
    } else {
        _num += ",00"
    }
    return currency+_num
  }
  return (
    <div className="product-row" onClick={()=>alert("Você clicou no produto "+title)}>
      <section><img src={img} alt={title} /></section>
      <section className="info">
        <header>
          <b className="title">{title}</b>
          <b className="price">{moneyfy(price)}</b>
        </header>
        <span className="description">{description}</span>
      </section>
    </div>
  );
}

export default ProductRow;
