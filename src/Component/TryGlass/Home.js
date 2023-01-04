import React, { Component } from "react";
import "./Home";
import "./Home.css";

export default class Home extends Component {
  glassList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassImage: "./glassesImage/v3.png",
  };

  changeGlass(glass) {
    this.setState({
      glassImage: glass,
    });
  }

  // renderGlass() {
  //   return this.glassList.map((glass) => {
  //     return (
  //       <div className="test-model">
  //         <img className="img1" src="./glassesImage/model.jpg" alt="model" />
  //         <div className="testGlass">
  //           <img src={this.state.glassImage} alt="test1" />
  //         </div>
  //         <div className="text">
  //           <h3>{glass.name}</h3>
  //           <p>{glass.desc}</p>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  render() {
    return (
      <div className="bigDiv">
        <div className="header">
          <h2>TEST GLASS APP ONLINE</h2>
        </div>
        <div className="container">
          <div className="model-image">
            <div className="test-image">
              {/* {this.renderGlass()} */}
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
            <button
              onClick={() => {
                this.changeGlass("./glassesImage/v1.png");
              }}
            >
              <img src="./glassesImage/g1.jpg" alt="g1" />
            </button>
            <button
              onClick={() => {
                this.changeGlass("./glassesImage/v2.png");
              }}
            >
              <img src="./glassesImage/g2.jpg" alt="g2" />
            </button>
            <button
              onClick={() => {
                this.changeGlass("./glassesImage/v3.png");
              }}
            >
              <img src="./glassesImage/g3.jpg" alt="g3" />
            </button>
            <button
              onClick={() => {
                this.changeGlass("./glassesImage/v4.png");
              }}
            >
              <img src="./glassesImage/g4.jpg" alt="g4" />
            </button>
            <button
              onClick={() => {
                this.changeGlass("./glassesImage/v5.png");
              }}
            >
              <img src="./glassesImage/g5.jpg" alt="g5" />
            </button>
            <button
              onClick={() => {
                this.changeGlass("./glassesImage/v6.png");
              }}
            >
              <img src="./glassesImage/g6.jpg" alt="g6" />
            </button>
            <button
              onClick={() => {
                this.changeGlass("./glassesImage/v7.png");
              }}
            >
              <img src="./glassesImage/g7.jpg" alt="g7" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
