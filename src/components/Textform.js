import React, {useState} from 'react';

export default function Textform(props) {
    const handleOnChange = (event) => {
       // console.log("onChange was clicked");
       setText(event.target.value)
    };
    const HandleUpClick = ()=>{
        console.log("uppercase was clicked");
        let Uptext=text.toUpperCase();
        setText(Uptext);
        props.showAlert("Converted to uppercase!!!!" , "success");
    };

    const HandleClearClick = ()=>{
        console.log("clear text was clicked");
        let Cleartext=" ";
        setText(Cleartext);
    };
  

    const HandleClearExtraSpace = ()=>{
        console.log("clear extra space was clicked");
       let newtext =text.split(/[ ] +/);
       setText(newtext.join(" "));
    }

    const HandleDownClick = ()=>{
        console.log("downClick was clicked");
        let DownText=text.toLowerCase();
        setText(DownText);
        props.showAlert("Converted to lowercase" , "success")
    }
  const [text,setText]= useState("");//text is  state and setText the function for it
  //setText("hkksjbjh") changes the state of text to "hkksjbjh"
  return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2> {props.heading}</h2>
    <div className="mb-4">

    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8" placeholder="enter text here" 
    ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={HandleUpClick}> Convert to upperacase</button>
    <button className="btn btn-primary mx-2" onClick={HandleDownClick}> Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={HandleClearClick}> Clear text</button>
    <button className="btn btn-primary mx-2" onClick={HandleClearExtraSpace}> Clear Extra Space</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p> You have entered {text.split(" ").length} words ,{text.length} characters</p>
        <p>{0.008*text.split(" ").length} minute used to read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  ) 
}
