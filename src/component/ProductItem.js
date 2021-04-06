import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div style={{ width: "350px" }} className="card text-left mt-2">
        <img
          style={{ width: "100%" }}
          className="card-img-top"
          src={item.img}
          alt={item.name}
        />
        <div className="card-body text-center">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">${item.price}</p>
          <button
            onClick={() => {
              this.props.viewDetail(item);
            }}
            data-toggle="modal"
            data-target="#modelId"
            className="btn btn-success text-white"
          >
            View Detail
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
