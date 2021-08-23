import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("The button is pressed");
    if (text.length === 0) {
      props.showAlert("Write Something in the below Text Area...", "warning");
    } else {
      props.showAlert("Converted to UpperCase", "success");
    }
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    console.log("The button is pressed");
    if (text.length === 0) {
      props.showAlert("Write Something in the below Text Area...", "warning");
    } else {
      props.showAlert("Converted to LowerCase", "success");
    }
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clear = () => {
    console.log("The text is cleared");
    if (text.length === 0) {
      props.showAlert("Write Something in the below Text Area...", "warning");
    } else {
      props.showAlert("You Cleared The Text", "danger");
    }
    setText("");
  };

  const handle = () => {
    console.log("The button is pressed");
    if (text.length === 0) {
      props.showAlert("Write Something in the below Text Area...", "warining");
    } else {
      props.showAlert("Your Sentence is Capitalized", "success");
    }
    const str = text;
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    setText(str2);
  };

  const handleStateChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  
  return (
    <div
      className="flex"
       style = {{
        color: props.mode === "light" ? "black" : "white"
      }}>
      <div className="textarea">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleStateChange}
            placeholder="Write Your Text Here..."
            style2={{
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpClick}
          >
            To Make Capitilize
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDownClick}
          >
            To Make Small
          </button>
          <button type="button" className="btn btn-secondary" onClick={clear}>
            Clear Text
          </button>
          <button type="button" className="btn btn-warning" onClick={handle}>
            To Make Capitilize
          </button>
          <button
            type="button"
            className="btn btn-success"
            // onClick={removeSpaces}
          >
            To Remove the Spaces
          </button>
        </div>
        <div
          className="summary my-3"
        >
          <h1>Summary</h1>
          <p>
            Words = {text.length > 0 ? text.trimEnd().split(" ").length : 0} And
            Characters = {text.length}
          </p>
        </div>
        <div className="priview">
          <h1>Priview</h1>
          <p>
            <b>
              {text.length === 0 ? "Write Something In Above Text Box" : text}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

TextArea.propTypes = {
  heaings: PropTypes.string,
};

TextArea.defaultProps = {
  heading: "Text-Box",
};
