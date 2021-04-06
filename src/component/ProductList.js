import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderCarList = () => {
    return this.props.productList.map((car, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem viewDetail={this.props.viewDetail} item={car} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderCarList()}</div>
      </div>
    );
  }
}

export default ProductList;
