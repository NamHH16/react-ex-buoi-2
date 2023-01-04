import React, { Component } from "react";
import "./Home";
import "./Home.css";

export default class Home extends Component {
  state = {
    glassImage: "./glassesImage/v1.png",
  };

  changeGlass(glass) {
    this.setState({
      glassImage: glass,
    });
  }

  render() {
    return (
      <div className="bigDiv">
        <div className="header">
          <h2>TEST GLASS APP ONLINE</h2>
        </div>
        <div className="container">
          <div className="model-image">
            <div className="test-image">
              <div className="test-model">
                <img
                  className="img1"
                  src="./glassesImage/model.jpg"
                  alt="model"
                />
                <div className="testGlass">
                  <img src={this.state.glassImage} alt="test1" />
                </div>
                <div className="text">
                  <h3>GUCCI G8850U</h3>
                  <p>
                    Light pink square lenses define these sunglasses, ending
                    with amother of pearl effect tip.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="model">
              <img
                className="img1"
                src="./glassesImage/model.jpg"
                alt="model"
              />
            </div>
          </div>

          <div className="products">
            <button onClick={this.changeGlass("./glassesImage/v1.png")}>
              <img src="./glassesImage/g1.jpg" alt="g1" />
            </button>
            <button onClick={this.changeGlass("./glassesImage/v2.png")}>
              <img src="./glassesImage/g2.jpg" alt="g2" />
            </button>
            <button onClick={this.changeGlass("./glassesImage/v3.png")}>
              <img src="./glassesImage/g3.jpg" alt="g3" />
            </button>
            <button onClick={this.changeGlass("./glassesImage/v4.png")}>
              <img src="./glassesImage/g4.jpg" alt="g4" />
            </button>
            <button onClick={this.changeGlass("./glassesImage/v5.png")}>
              <img src="./glassesImage/g5.jpg" alt="g5" />
            </button>
            <button onClick={this.changeGlass("./glassesImage/v6.png")}>
              <img src="./glassesImage/g6.jpg" alt="g6" />
            </button>
            <button onClick={this.changeGlass("./glassesImage/v7.png")}>
              <img src="./glassesImage/g7.jpg" alt="g7" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
