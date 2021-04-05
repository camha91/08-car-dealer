import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";
import dataCar from "../Data/data.json";

class CarStore extends Component {
  products = dataCar;

  render() {
    return (
      <div>
        <h3 className="display-4 text-center">Car List</h3>
        <Modal />
        <ProductList productList={this.products} />
      </div>
    );
  }
}

export default CarStore;
