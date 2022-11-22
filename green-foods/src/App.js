import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [userInput, setUserInput] = useState(" ");
  const [productName, setProductName] = useState(" ");
  console.log(userInput);
  // const getUserInput = (event) => {
  //   console.log("this is the event =>", event)

  //   const userInput = event.target.value
  // console.log(userInput)
  // }

  useEffect(() => {
    fetch("https://uk.openfoodfacts.org/api/v0/product/80135463.json")
      .then((response) => response.json())
      .then((data) => {
        setProductName(data.product.abbreviated_product_name);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <form>
        <label>
          Enter barcode:
          <input
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          ></input>
        </label>
      </form>
      <p>userInput here: {userInput}</p>
      <p>productName here : {productName}</p>
      <button>Submit</button>
    </div>
  );
}

export default App;

// display an input box
// submit button

// take the user input

// store the user input
// make API call with user input
// display CO2 data
// display image of the product
