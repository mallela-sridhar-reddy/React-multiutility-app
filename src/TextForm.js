import React, { useState } from "react";



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {     //event is sent as an array
        setText(event.target.value)

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);   //used regex here
        setText(newText.join(" "))
    }
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);


  }
    const [text, setText] = useState('');
    return (
    <React.Fragment>
       <div className="container">
        <h1 >{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary " onClick={handleCopy}>Copy Text</button>




      </div>
      <div className="container">
        <h2>
            text summary
        </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.95*text.split(" ").length} typing speed in seconds</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in the textbox to preview it here"}</p>
      </div>
    </React.Fragment>
  );
}











