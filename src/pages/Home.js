import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <h1>Easy Notes</h1>
        </section>
        <Footer />
      </div>
    );
  }
}
