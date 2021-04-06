import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";
import dataCar from "../Data/data.json";

class CarStore extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "black tesla",
      img: "./img/black-tesla.jpg",
      price: 72990,
    },
  };

  products = dataCar;

  viewDetail = (newItem) => {
    this.setState({ productDetail: newItem });
  };

  render() {
    return (
      <div>
        <h3 className="display-4 text-center">Car List</h3>
        <Modal content={this.state.productDetail} />
        <ProductList viewDetail={this.viewDetail} productList={this.products} />
      </div>
    );
  }
}

export default CarStore;
